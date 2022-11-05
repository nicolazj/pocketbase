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

  res.json(pocketbase.authStore.model);
}
