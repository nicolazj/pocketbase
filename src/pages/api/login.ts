import type { NextApiRequest, NextApiResponse } from "next";
import { getPocketBase } from "../../pocketbase";
import { Collections } from "../../pocketbase-types";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== "POST") {
    return;
  }
  const { email, password } = req.body;
  const { redirect } = req.query;
  let pocketbase = getPocketBase();
  await pocketbase
    .collection(Collections.Users)
    .authWithPassword(email, password);
  res.setHeader("set-cookie", pocketbase.authStore.exportToCookie());
  res.redirect((redirect as string) ?? "/");
}
