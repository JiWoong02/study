import { useParams, usePathname, useRouter } from "next/navigation.js";
import { connectDB } from "../../util/database.js";
import Link from "next/link.js";

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

export default function List({ posts }) {
  let router = useRouter();
  return (
    <div className="list-bg">
      {posts.map((post, i) => {
        return (
          <div className="list-item">
            <p>{i + 1}번 글</p>
            <Link prefetch={false} href={`/detail/${post._id}`}>
              <h4>{post.title}</h4>
            </Link>
            <p>{post.content}</p>
          </div>
        );
      })}
    </div>
  );
}
