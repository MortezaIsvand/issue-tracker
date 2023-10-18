import BackButton from "@/components/BackButton";
import DeleteButton from "@/components/DeleteButton";
import EditButton from "@/components/EditButton";
import IssueStatusBadge from "@/components/IssueStatusBadge";
import { Issue } from "@prisma/client";
import { getServerSession } from "next-auth";

interface Props {
  params: {
    id: string;
  };
}

export const getIssue = async ({ params }: Props): Promise<Issue> => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/issues/${params.id}`, {
      cache: "no-store",
    });
    return res.json();
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
};

const IssueDetailPage = async ({ params }: Props) => {
  const session = await getServerSession();
  const issue = await getIssue({ params });
  return (
    <div className="flex flex-col gap-12">
      <BackButton href={"/issues"} />
      <div>
        <div className="flex items-baseline gap-24 border-b pb-2 max-sm:flex-col max-sm:gap-2">
          <div className="flex items-baseline gap-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:whitespace-nowrap relative max-sm:max-w-md">
              {issue.title}
            </h1>
            <span>{<IssueStatusBadge issue={issue} />}</span>
          </div>
          <div className="flex gap-4">
            {session && (
              <>
                <DeleteButton issue={issue} />
                <EditButton issue={issue} />
              </>
            )}
          </div>
        </div>
        <p className="max-w-md pt-4">{issue.description}</p>
      </div>
    </div>
  );
};
export default IssueDetailPage;
