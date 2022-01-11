import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      res.json({
        message:
          "Hello! Welcome to Nextjs, Typescript, Tailwind Starter script by github.com/boyinrust",
        req: "POST Request",
      });
    } catch (error) {
      res.json({ message: "Error in request", req: "POST Request" });
    }
  } else if (req.method === "GET") {
    try {
      res.json({
        message:
          "Hello! Welcome to Nextjs, Typescript, Tailwind Starter script by github.com/boyinrust",
        req: "GET Request",
      });
    } catch (error) {
      res.json({ message: "Error in request", req: "GET Request" });
    }
  }
};

export default handler;
