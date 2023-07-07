import { NextResponse } from "next/server";
import Link from "next/link";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const getBlogs = async () => {
  const API_URL = process.env.API_URL;
  const res = await fetch(`${API_URL}/api/blogs`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }
  const data = await res.json();
  return data;
  // try {
  //   const data = await res.json();
  //   return data;
  // } catch (error) {
  //   return NextResponse.json(
  //     { message: "Something went wrong" },
  //     { status: 500 }
  //   );
  // }
};

const Card = async () => {
  const blogsData = await getBlogs();
  return (
    <>
      <div className="flex gap-4 mx-auto flex-wrap ">
        {blogsData.map((blog) => (
          <div key={blog._id}>
            <div className="card ">
              <div className="card-image"></div>
              <Link rel="preload" href={`/blog/${blog._id}`}>
                <div className="category">{blog.title}</div>
                <div className="heading">
                  <p className="w-full h-full overflow-hidden">
                    {blog.content}
                  </p>
                </div>
              </Link>
              <div className="flex gap-3">
                <DeleteButton id={blog._id} />
                <Link rel="preload" href={`/edit_blog/${blog._id}`}>
                  <EditButton />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
