import axios from 'axios';

const instance = axios.create({
    // baseURL: 'http://localhost:5001/clone-b1ddb/us-central1/api' // The API (cloud function) URL
    baseURL: 'https://us-central1-clone-b1ddb.cloudfunctions.net/api' // The API (cloud function) URL
    // https://us-central1-clone-b1ddb.cloudfunctions.net/api

});

export default instance;
