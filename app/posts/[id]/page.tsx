import React from "react";
import {
  BaseRecord,
  Collections,
  PostRecord,
  UsersRecord,
} from "../../../pocketbase-types";
import { pocketbase } from "../../pb";

let fetch = async (id: string) => {
  const r = await pocketbase
    .collection(Collections.Post)
    .getOne<PostRecord & BaseRecord & { expand: { writtenBy: UsersRecord } }>(
      id,
      {
        expand: "writtenBy",
      }
    );

  return r;
};
export default async ({ params }: { params: { id: string } }) => {
  let post = await fetch(params.id);
  return (
    <div>
      <h2>#{post.id}</h2>
      <h3>{post.content}</h3>
      <p> by {post.expand.writtenBy.name}</p>
    </div>
  );
};
