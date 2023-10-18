import { Issue } from "@prisma/client";
import Link from "next/link";
import { FiEdit } from "react-icons/fi";

const EditButton = ({ issue }: { issue: Issue }) => {
  return (
    <Link href={`/issues/${issue.id}/edit`} title="Edit the issue">
      <FiEdit style={{ color: "#DAA520" }} />
    </Link>
  );
};
export default EditButton;
