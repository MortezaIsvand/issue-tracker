import prisma from "@/prisma/client";
import IssueStatusBadge from "./IssueStatusBadge";
import Link from "next/link";

const LatestIssues = async () => {
  const issues = await prisma.issue.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
  });
  return (
    <div className="border rounded-lg overflow-auto ">
      <table>
        <thead>
          <tr className="text-left ">
            <th className="px-6 py-3">Latest issues</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr key={issue.id}>
              <td className="px-6 py-3 border-b">
                <Link
                  href={`/issues/${issue.id}/detail`}
                  className="hover:underline"
                >
                  {issue.title}
                </Link>
                <div>
                  <IssueStatusBadge issue={issue} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default LatestIssues;
