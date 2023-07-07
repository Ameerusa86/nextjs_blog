import ConnectDB from "@/lib/db";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";
// GET ALL BLOGS
// route /api/blogs
// is public and can be accessed by anyone

export const GET = async (req, res) => {
  await ConnectDB();
  try {
    const blogs = await Blog.find();
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};

// POST A NEW BLOG
// route /api/blogs
// is restricted and can only be accessed by authenticated users

export const POST = async (req, res) => {
  await ConnectDB();
  const { title, content } = await req.json();
  try {
    const newBlog = Blog.create({ title, content });
    return NextResponse.json(
      newBlog,

      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};

// DELETE A BLOG
// route /api/blogs/:id

export const DELETE = async (req, res) => {
  await ConnectDB();
  const id = req.nextUrl.searchParams.get("id");
  try {
    await Blog.findByIdAndDelete(id);
    return NextResponse.json({ message: "Blog deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};
