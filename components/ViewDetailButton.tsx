import { Issue } from "@prisma/client";
import Link from "next/link";
import { FcViewDetails } from "react-icons/fc";

const ViewDetailButton = ({ issue }: { issue: Issue }) => {
  return (
    <Link
      href={`/issues/${issue.id}/detail`}
      title="View detail"
      className="flex items-center"
    >
      <FcViewDetails />
    </Link>
  );
};
export default ViewDetailButton;
