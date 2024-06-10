// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  if (req.method === "POST") {
    res.status(200).json("POST요청입니다.");
  }
  if (req.method === "GET") {
    res.status(200).json("GET요청입니다.");
  }
}
