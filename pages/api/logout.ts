import type { NextApiRequest, NextApiResponse } from "next";
import { pocketbase } from "../../app/pb";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== "GET") {
    return;
  }
  pocketbase.authStore.loadFromCookie(req.headers["cookie"] ?? "");
  pocketbase.authStore.clear();
  res.setHeader("set-cookie", pocketbase.authStore.exportToCookie());
  res.redirect("/");
}
