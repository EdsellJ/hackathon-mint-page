import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET": {
      const result = await axios.get(
        "https://web3.career/api/v1?token=A8qGWD3bCZi2jwyrRGBYGfDenw3bjbQA"
      );
      return res.status(200).send(result.data);
    }
  }
}
