import React from "react";
import { Collections, PostRecord, BaseRecord } from "../pocketbase-types";
import Link from "next/link";
import { pocketbase } from "./pb";
let fetchBooks = async () => {
  // fetch a paginated records list
  const res = await pocketbase
    .collection(Collections.Post)
    .getList<PostRecord & BaseRecord>(1, 50, {});
  return res.items;
};

const Home = async () => {
  let data = await fetchBooks();
  return (
    <div>
      home
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}> {post.content}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
