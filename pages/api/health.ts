import type { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse<string>): void => {
  res.status(200).send("Alive");
}

export default handler;