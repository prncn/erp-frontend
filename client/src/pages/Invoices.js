import React, { useEffect, useState } from 'react';
import { API } from '../controller/APIService';
import { ImSpinner2 } from 'react-icons/im';
import { FiChevronDown } from 'react-icons/fi';
import { FiChevronUp } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Invoices() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState(1);

  useEffect(() => {
    async function fetchInvoices() {
      const data = await API.getInvoices();
      console.log(data);
      setData(data);
      if (data) {
        setIsLoading(false);
      }
    }
    fetchInvoices();
  }, []);

  function formatDate(date) {
    return new Date(date).toLocaleDateString('de-DE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  }

  function sortByKey(property) {
    setSortOrder(sortOrder * -1);

    return function (a, b) {
      function item(key) {
        switch (property) {
          case 'GESAMT':
            return Number(key[property]);

          case 'RECHDATUM':
            return Date.parse(key[property]);

          default:
            return key[property];
        }
      }
      const result = item(a) < item(b) ? -1 : item(a) > item(b) ? 1 : 0;
      return result * sortOrder;
    };
  }

  const fieldnameList = [
    'COMPANY',
    'GESAMT',
    'ID',
    'LRECHNR',
    'MASKENKEY',
    'RECHDATUM',
    'STATUS',
  ];

  const [activeSort, setActiveSort] = useState([]);
  function TableHeader({ header }) {
    function handleSort(key) {
      data.sort(sortByKey(key));
      activeSort.push(key);
      if (activeSort.length > 2) {
        activeSort.shift();
      }
      setActiveSort(activeSort);

      console.log(activeSort);
    }

    return (
      <th
        className="p-1 pr-2 hover:bg-black hover:text-white transition cursor-pointer"
        key={header}
        onClick={() => handleSort(header)}
      >
        <div
          className={`flex items-center ${
            activeSort.at(-1) === header ? 'text-red-400' : ''
          }`}
        >
          {header}
          <div className="ml-auto">
            {sortOrder === -1 && activeSort.at(-1) === header ? (
              <FiChevronUp />
            ) : sortOrder === 1 && activeSort.at(-1) === header ? (
              <FiChevronDown />
            ) : (
              ''
            )}
          </div>
        </div>
      </th>
    );
  }

  return (
    <div className="min-h-screen w-full flex items-center bg-gray-50">
      <div className="w-full h-screen p-10">
        <p className="font-bold text-4xl py-3 font-display">
          INVOICES {formatDate(Date.now())}
        </p>
        <div className="h-10 transition">
          {isLoading && <ImSpinner2 className="animate-spin" />}
        </div>
        <table className="w-full space-x-1 space-y-1 bg-gray-50">
          {!isLoading && (
            <thead>
              <tr className="text-left space-x-1 space-y-1">
                {fieldnameList.map((header) => (
                  <TableHeader header={header} key={header} />
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {data.map((row) => (
              <tr className="hover:bg-gray-100 transition" key={row.ID}>
                {Object.keys(row).map((col, i) => (
                  <td className="hover:bg-gray-200 px-1 py-2 border-y" key={i}>
                    {{
                      RECHDATUM: formatDate(row[col]),
                      GESAMT: (
                        <div className="text-right">
                          {Number(row[col]).toFixed(2)}
                        </div>
                      ),
                      COMPANY: (
                        <Link to={`/companies/${row[col]}`}>{row[col]}</Link>
                      ),
                    }[col] || row[col]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
