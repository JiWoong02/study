import { ObjectId } from "mongodb";
import { connectDB } from "../../../util/database.js";

export async function getServerSideProps(props) {
  let client = await connectDB;
  const db = client.db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.objectId) });

  return {
    props: {
      post: JSON.parse(JSON.stringify(result)),
    },
  };
}

export default function Detail({ post }) {
  return (
    console.log(post),
    (
      <div>
        <h4>상세페이지</h4>
        <h4>{post.title}</h4>
        <p>{post.content}</p>
      </div>
    )
  );
}
