import React from "react";
export default function Login(props: any) {
  return (
    <form
      action={`/api/login?redirect=${props.searchParams.redirect}`}
      method="POST"
      className="flex flex-col"
    >
      <input type="email" name="email" className="p-2 m-2" />
      <input type="password" name="password" className="p-2 m-2" />
      <button type="submit">Log in</button>
    </form>
  );
}
