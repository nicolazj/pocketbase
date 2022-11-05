import type { NextApiRequest, NextApiResponse } from "next";
import { getPocketBase } from "../../../pocketbase";
import { Collections, PostRecord } from "../../../pocketbase-types";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== "POST") {
    return;
  }

  const pocketbase = getPocketBase(req.headers.cookie);

  const { content } = req.body;

  let obj = {
    content,
    writtenBy: pocketbase.authStore.model?.id,
  };
  console.log(obj);

  await pocketbase.collection(Collections.Post).create<PostRecord>(obj);

  res.redirect("/");
}
