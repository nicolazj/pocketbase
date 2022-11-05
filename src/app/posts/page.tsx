import React from "react";
import PocketBase from "pocketbase";
import { Collections, PostRecord } from "../../pocketbase-types";

let fetchBooks = async () => {
  const client = new PocketBase("http://127.0.0.1:8090");

  // fetch a paginated records list
  const resultList = await client
    .collection(Collections.Post)
    .getList<PostRecord>(1, 50, {});
  return resultList.items;
};

const Home = async () => {
  let data = await fetchBooks();
  return (
    <div>
      home
      <ul>
        {data.map((post) => (
          <li>{post.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
