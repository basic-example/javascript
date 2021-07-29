import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.end(
    `
    [id] req.query:
    ${JSON.stringify(req.query)}
    `
  );
};
