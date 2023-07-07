"use client";
import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal";

const DeleteButton = async ({ id }) => {
  //   const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const removeBlog = async () => {
    const confirmed = confirm("Are you sure you want to delete this blog?");
    if (confirmed) {
      await fetch(`/api/blogs?id=${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      router.refresh();
    }
  };
  //   const handleDeleteClick = () => {
  //     setShowModal(true);
  //   };

  //   const handleModalClose = () => {
  //     setShowModal(false);
  //   };

  return (
    <>
      <button
        onClick={removeBlog}
        className="text-red-500 hover:text-red-700 cursor-pointer"
      >
        <MdDeleteForever size={25} />
      </button>
      {/* {showModal && <Modal onClose={handleModalClose} />} */}
    </>
  );
};

export default DeleteButton;
