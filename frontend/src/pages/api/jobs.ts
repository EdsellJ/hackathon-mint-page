import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	switch (req.method) {
		case "GET": {
			const result = await axios.get(
				` ${process.env.WEB3_API}?token=${process.env.WEB3_API_TOKEN}`
			);
			return res.status(200).send(result.data);
		}
	}
}
