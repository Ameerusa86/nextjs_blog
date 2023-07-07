"use client";

import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { NextResponse } from "next/server";
import { useRouter } from "next/navigation";

const EditBlogForm = ({ id, title, content }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newTitle,
          newContent,
        }),
      });
      if (response.ok) {
        router.push("/blog");
        router.refresh();
      }
    } catch (error) {
      return NextResponse.json(
        { message: "Something went wrong!" },
        { status: 500 }
      );
    }
  };

  return (
    <form className="max-w-5xl flex flex-col mx-auto" onSubmit={handleSubmit}>
      <label className="font-bold text-xl mb-3">Title</label>
      <input
        className="rounded-lg px-3 py-3 mb-3 text-black focus:outline-none"
        type="text"
        placeholder="Blog Title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <label className="font-bold text-xl mb-3">Content</label>
      <textarea
        className="rounded-lg px-3 py-3 mb-3 text-black"
        placeholder="Blog Content"
        value={newContent}
        onChange={(e) => setNewContent(e.target.value)}
      />
      <CustomButton name="Update Blog" type="submit" />
    </form>
  );
};
export default EditBlogForm;
