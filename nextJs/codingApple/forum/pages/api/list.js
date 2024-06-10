import { connectDB } from "../../util/database.js";
let client = await connectDB;
const db = client.db("forum");
let result = await db.collection("post").find().toArray();
const posts = JSON.parse(JSON.stringify(result));

export default function handler(req, res) {
  res.status(200).json(posts);
}
