import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.end(
    `
    [[...slug]] req.query:
    ${JSON.stringify(req.query)}
    `
  );
};
