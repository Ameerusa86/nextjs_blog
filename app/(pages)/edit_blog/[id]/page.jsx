import EditBlogForm from "@/components/EditBlogForm";
import React from "react";

const getBlogById = async (id) => {
  const API_URL = process.env.API_URL;
  try {
    const response = await fetch(`${API_URL}/api/blogs/${id}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const EditBlog = async ({ params }) => {
  const { id } = params;
  const blog = await getBlogById(id);
  const { title, content } = blog;

  return <EditBlogForm id={id} title={title} content={content} />;
};

export default EditBlog;
