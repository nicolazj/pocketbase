import type { NextApiRequest, NextApiResponse } from "next";
import { getPocketBase } from "../../pocketbase";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== "GET") {
    return;
  }

  let pocketbase = getPocketBase(req.headers.cookie);
  pocketbase.authStore.clear();
  let cookies = pocketbase.authStore.exportToCookie();
  console.log("cookie after log out", cookies);
  res.setHeader("set-cookie", cookies);
  res.redirect("/");
}
