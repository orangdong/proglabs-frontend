// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getToken } from "next-auth/jwt";

export default async function handler(req, res) {
  const secret = process.env.JWT_SECRET;
  const token = await getToken({ req, secret });
  console.log("JSON Web Token", token);

  res.status(200).json({ name: "John Doe", token });
}
