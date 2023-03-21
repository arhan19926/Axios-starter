import axios from "axios";
import React, { useState } from "react";

const baseUrl = `https://jsonplaceholder.typicode.com/posts`;

const Axios = () => {
  const [post, setPost]: any = useState([]);

  const fetchResponse = async () => {
    const res = await axios.get(baseUrl);
    setPost(res.data);
  };

  return (
    <div>
      <button onClick={fetchResponse}>CL:ick</button>
      <div >
        {post.map((c: any,index:any) => (
          <div style={{backgroundColor:index % 2 == 0 ? "beige":"powderblue",borderBottom:'thick solid black',marginBottom:'1rem'}}>
            <div>{c.userId}</div>
            <div>{c.title}</div>
            <div>{c.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Axios;
