"use client";

import { Issue } from "@prisma/client";
import { BsTrash } from "react-icons/bs";
import { useRouter } from "next/navigation";
import axios from "axios";

interface Props {
  issue: Issue;
}

const DeleteButton = ({ issue }: Props) => {
  const router = useRouter();
  const handleClick = async () => {
    try {
      await axios(`/api/issues/${issue.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      router.push("/issues");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button title="Delete the issue" onClick={handleClick}>
      <BsTrash style={{ color: "#B22222" }} />
    </button>
  );
};
export default DeleteButton;
