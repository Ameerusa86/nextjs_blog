import { NextResponse } from "next/server";
// GET blog details by blog ID

const getBlogDetails = async (id) => {
  const api = process.env.API_URL;
  const res = await fetch(`${api}/api/blogs/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch blog details");
  }
  const data = await res.json();
  return data;
};

const BlogDetails = async ({ params }) => {
  const blog = await getBlogDetails(params.id);
  console.log(blog);
  const { title, content, author, id } = blog;

  return (
    <div className="text-white">
      <h1>Title: {title}</h1>
      <p>Content: {content}</p>
    </div>
  );
};

export default BlogDetails;
