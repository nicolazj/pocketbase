import React from "react";

export default function NewPost() {
  return (
    <form action={`/api/posts/new`} method="POST" className="flex flex-col">
      <input type="content" name="content" className="p-2 m-2" />
      <button type="submit">Create</button>
    </form>
  );
}
