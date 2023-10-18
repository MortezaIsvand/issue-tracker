import { Issue, Status } from "@prisma/client";
import { getServerSession } from "next-auth";
import Link from "next/link";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import IssueStatusBadge from "./IssueStatusBadge";
import ViewDetailButton from "./ViewDetailButton";
import { BiChevronDown } from "react-icons/bi";

interface Props {
  issues: Issue[];
  searchParams: {
    status: Status;
    orderBy: keyof Issue;
  };
}

const IssuesTable = async ({ issues, searchParams }: Props) => {
  const columns: {
    label: string;
    value: keyof Issue;
    className?: string;
  }[] = [
    { label: "Issues", value: "title", className: "px-6 py-3" },
    { label: "Status", value: "status", className: "px-6 py-3 max-sm:hidden" },
    {
      label: "Created",
      value: "createdAt",
      className: "px-6 py-3 max-sm:hidden",
    },
  ];
  const session = await getServerSession();
  return (
    <div className="border rounded-lg overflow-auto ">
      <table className="w-full text-left">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th key={column.value} className={column.className}>
                <Link
                  href={{
                    query: {
                      status: searchParams.status,
                      orderBy: column.value,
                    },
                  }}
                  className="flex items-center gap-2"
                >
                  {column.label}
                  {searchParams.orderBy === column.value && <BiChevronDown />}
                </Link>
              </th>
            ))}
            <th className="px-6 py-3 max-sm:hidden">Actions</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr key={issue.id} className="hover:bg-gray-50 border-b">
              <td className="px-6 py-4">
                <Link
                  href={`/issues/${issue.id}/detail`}
                  className="hover:underline whitespace-nowrap"
                >
                  {issue.title}
                </Link>
                <div className="sm:hidden">
                  <IssueStatusBadge issue={issue} />
                </div>
              </td>
              <td className="px-6 py-4 max-sm:hidden">
                {<IssueStatusBadge issue={issue} />}
              </td>
              <td className="px-6 py-4 max-sm:hidden whitespace-nowrap">
                {new Date(issue.createdAt).toDateString()}
              </td>
              {session && (
                <>
                  <td className=" gap-4 px-6 py-4 flex item-center align-middle max-sm:hidden">
                    <DeleteButton issue={issue} />
                    <EditButton issue={issue} />
                    <ViewDetailButton issue={issue} />
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default IssuesTable;
