// import axios from "axios";

export class HttpClient {

  baseURL = 'https://jsonplaceholder.typicode.com';
  async get( url: string ) {
    // const {data, status} = await axios.get(this.baseURL+url);
    // return {data, status};

    const response = await fetch(this.baseURL+url);
    const data = await response.json();

    return {data, status: response.status}
  }

}