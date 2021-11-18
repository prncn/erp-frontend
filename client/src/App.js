import React, { useState } from 'react'

export default function App() {
  const [query, setQuery] = useState([])
  const [data, setData] = useState([])

  const submit = async e => {
    e.preventDefault()
    const url = `http://127.0.0.1:5000/api/invoices?id=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    setData(data)
  }

  return (
    <div className="h-screen flex flex-col items-center bg-gray-300 p-5">
      <div className="w-2/5 h-4/5">
      <iframe src="http://docs.google.com/gview?url=http://web.mit.edu/15.053/www/AMP-Chapter-11.pdf&embedded=true"
        className="rounded-lg shadow-lg w-full h-full" frameBorder="0"></iframe>
      <form onSubmit={submit} className="w-full">
        <input
          type="text"
          className="rounded shadow-lg p-3 focus:outline-none my-3 w-full"
          placeholder="Search invoicer..."
          onChange={e => { setQuery(e.target.value) }}
        />
      </form>
      <p style={{ height: '1em' }}>{data}</p>
      </div>
    </div>
  );
}
