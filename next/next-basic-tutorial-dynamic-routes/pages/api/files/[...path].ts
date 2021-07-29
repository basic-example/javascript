import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.end(
    `
    [...path] req.query:
    ${JSON.stringify(req.query)}
    `
  );
};
