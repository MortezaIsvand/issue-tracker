"use client";

import { Issue, Status } from "@prisma/client";
import { useRouter } from "next/navigation";

interface Props {
  searchParams: {
    status: Status;
    orderBy: keyof Issue;
  };
}

const IssueStatusFilter = ({ searchParams }: Props) => {
  const router = useRouter();
  return (
    <select
      className="border border-gray-200 px-2 py-1.5 rounded-md"
      onChange={(event) => {
        const queryParams = new URLSearchParams();
        const selectedStatus = event.target.value;
        if (selectedStatus) queryParams.append("status", selectedStatus);
        if (searchParams.orderBy)
          queryParams.append("orderBy", searchParams.orderBy);
        const query = queryParams.size ? "?" + queryParams.toString() : "";
        router.push(`/issues/${query}`);
      }}
      defaultValue={searchParams.status}
    >
      <option value={""}>All</option>
      <option value={"OPEN"}>Open</option>
      <option value={"CLOSED"}>Closed</option>
      <option value={"IN_PROGRESS"}>In Progress</option>
    </select>
  );
};
export default IssueStatusFilter;
