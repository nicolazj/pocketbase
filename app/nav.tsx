"use client";

import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { setuid } from "process";
import { UsersRecord } from "../pocketbase-types";

let getYou = async () => {
  let res = await fetch("/api/you");
  return res.json();
};

export let Nav = (props: any) => {
  const pathname = usePathname();

  let [user, setUser] = useState<UsersRecord>();

  useEffect(() => {
    getYou().then((r) => {
      setUser(r);
    });
  }, []);

  return (
    <div className="flex justify-end">
      {user ? (
        <div className="flex flex-row items-center">
          <p>{user.name}</p>
          <Link href="/posts/new" className="p-4">
            New post
          </Link>
          <a href="/api/logout" className="p-4">
            Log out
          </a>
        </div>
      ) : (
        <Link href={`/login?redirect=${pathname}`} className="p-4">
          Log in
        </Link>
      )}
    </div>
  );
};
