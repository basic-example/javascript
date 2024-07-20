import type { NextApiRequest, NextApiResponse } from "next";

export default function Page(req: NextApiRequest, res: NextApiResponse) {
  res.json({ segment: "[...path]", value: req.query });
}
