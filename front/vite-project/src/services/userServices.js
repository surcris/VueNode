// const axios = require('axios');
import axios from 'axios';
export async function getAllUsers() {

    const response = await axios.get('http://localhost:3000/users');
    return response.data;
}

// export async function createUser(data) {
//     const response = await axios.post(`/api/user`, {user: data});
//     return response.data;
// }