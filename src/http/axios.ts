import axios from "axios";


export const server = axios.create({ baseURL: `https://jsonplaceholder.typicode.com` });

// server.get('/comments', {
//     params: {
//         postId: 1
//     }
// })