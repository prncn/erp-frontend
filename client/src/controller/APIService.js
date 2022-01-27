const url = 'http://127.0.0.1:5000/api';

export class API {
  static async getInvoices() {
    const endpoint = `${url}/invoices`;
    const response = await fetch(endpoint);
    console.log(response);
    const data = await response.json();
    return data;
  }
}
