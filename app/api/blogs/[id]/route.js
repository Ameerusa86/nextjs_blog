import ConnectDB from "@/lib/db";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

// UPDATE BLOG
// route : /api/blogs/:id

export const PUT = async (req, { params }) => {
  const { id } = params;
  await ConnectDB();
  const { newTitle, newContent } = await req.json();

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(id, {
      title: newTitle,
      content: newContent,
    });
    return NextResponse.json(updatedBlog, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// GET a single blog
// route : /api/blogs/:id
export const GET = async (req, { params }) => {
  const { id } = params;
  await ConnectDB();
  try {
    const blog = await Blog.findById(id);
    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
