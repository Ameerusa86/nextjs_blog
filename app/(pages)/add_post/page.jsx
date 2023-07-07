"use client";

import CustomButton from "@/components/CustomButton";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });
    // const data = await response.json();
    if (response.ok) {
      router.push("/blog");
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-5xl flex flex-col mx-auto">
      <label className="font-bold text-xl mb-3">Title</label>
      <input
        className="rounded-lg px-3 py-3 mb-3 text-black focus:outline-none"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label className="font-bold text-xl mb-3">Content</label>
      <textarea
        className="rounded-lg px-3 py-3 mb-3 text-black"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <CustomButton name="Add New Blog" type="submit" className="bg-red-500" />
    </form>
  );
};

export default AddBlog;
