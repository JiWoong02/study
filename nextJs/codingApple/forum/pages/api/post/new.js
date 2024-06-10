import { connectDB } from "../../../util/database.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    if (req.body.title == "") {
      res.status(500).json("제목 왜안씀");
    } else {
      try {
        const db = (await connectDB).db("forum");
        let result = await db.collection("post").insertOne(req.body);
        return res.status(200).redirect("/list");
      } catch (e) {
        res.status(500).json(e.message);
      }
    }
  }
}
