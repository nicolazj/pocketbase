import type { NextApiRequest, NextApiResponse } from "next";
import { pocketbase } from "../../../app/pb";
import { Collections, PostRecord } from "../../../pocketbase-types";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== "POST") {
    return;
  }
  const { content } = req.body;
  pocketbase.authStore.loadFromCookie(req.headers["cookie"] ?? "");

  let obj = {
    content,
    writtenBy: pocketbase.authStore.model?.id,
  };

  console.log(obj);

  await pocketbase.collection(Collections.Post).create<PostRecord>(obj);

  res.setHeader("set-cookie", pocketbase.authStore.exportToCookie());
  res.redirect("/posts/new");
}
