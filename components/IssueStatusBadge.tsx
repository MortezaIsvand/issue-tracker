import { Issue } from "@prisma/client";

const IssueStatusBadge = ({ issue }: { issue: Issue }) => {
  const color = `${
    issue.status === "OPEN"
      ? "bg-red-100 text-red-500"
      : issue.status === "CLOSED"
      ? "bg-green-100 text-green-500"
      : issue.status === "IN_PROGRESS"
      ? "bg-violet-100 text-violet-500"
      : "bg-gray-50 text-gray-100"
  } `;

  return <span className={`${color} px-2 rounded-md`}>{issue.status}</span>;
};
export default IssueStatusBadge;
