import AddIssueButton from "@/components/AddIssueButton";
import BackButton from "@/components/BackButton";
import IssueStatusFilter from "@/components/IssueStatusFilter";
import IssuesTable from "@/components/IssuesTable";
import Pagination from "@/components/Pagination";
import prisma from "@/prisma/client";
import { Issue, Status } from "@prisma/client";
import Link from "next/link";

interface Props {
  searchParams: {
    status: Status;
    orderBy: keyof Issue;
    page: string;
  };
}

const getIssues = async ({ searchParams }: Props): Promise<Issue[]> => {
  const queryParams = new URLSearchParams(searchParams);
  const url = `${process.env.API_URL}/api/issues?${queryParams.toString()}`;
  const res = await fetch(url, { cache: "no-store" });
  return res.json();
};

const IssuesPage = async ({ searchParams }: Props) => {
  const issues = await getIssues({ searchParams });
  const currentPage = parseInt(searchParams.page) || 1;
  const itemsCount = searchParams.status
    ? await prisma.issue.count({ where: { status: searchParams.status } })
    : await prisma.issue.count();
  return (
    <div className="flex flex-col gap-8 relative">
      <BackButton href="/" />
      <div className="space-y-2 relative min-h-[320px]">
        <div className="flex items-center justify-between ">
          <IssueStatusFilter searchParams={searchParams} />
          <Link href={"/issues/create"}>
            <AddIssueButton />
          </Link>
        </div>
        <IssuesTable issues={issues} searchParams={searchParams} />
      </div>
      <Pagination
        currentPage={currentPage}
        pageSize={4}
        itemsCount={itemsCount}
        searchParams={searchParams}
      />
    </div>
  );
};
export default IssuesPage;
