import type { NextApiRequest, NextApiResponse } from "next";
import { pocketbase } from "../../app/pb";
import { Collections } from "../../pocketbase-types";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== "GET") {
    return;
  }

  pocketbase.authStore.loadFromCookie(req.headers["cookie"] ?? "");
  res.json(pocketbase.authStore.model);
}
