import IssuesChart from "@/components/IssuesChart";
import LatestIssues from "@/components/LatestIssues";
import StatusCard from "@/components/StatusCard";
import prisma from "@/prisma/client";

const HomePage = async () => {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const closed = await prisma.issue.count({ where: { status: "CLOSED" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });

  return (
    <section className="flex gap-2 justify-between max-sm:flex-col max-sm:gap-8">
      <div className="flex flex-col justify-between gap-8">
        <StatusCard open={open} closed={closed} inProgress={inProgress} />
        <IssuesChart open={open} closed={closed} inProgress={inProgress} />
      </div>
      <LatestIssues />
    </section>
  );
};
export default HomePage;
