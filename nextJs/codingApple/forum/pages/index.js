import { connectDB } from "../util/database.js";

export async function getServerSideProps() {
  let client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);

  return {
    props: {
      posts: JSON.parse(JSON.stringify(result)),
    },
  };
}

export default function Home({ posts }) {
  return <main>{posts.length > 0 ? posts[0].title : "No posts found"}</main>;
}
