import { Status } from "@prisma/client";
import Link from "next/link";

interface Props {
  open: number;
  closed: number;
  inProgress: number;
}

const StatusCard = ({ open, closed, inProgress }: Props) => {
  const containers: {
    label: string;
    value: number;
    status: Status;
  }[] = [
    { label: "Open Issues", value: open, status: "OPEN" },
    { label: "Closed Issues", value: closed, status: "CLOSED" },
    { label: "In-Progress Issues", value: open, status: "IN_PROGRESS" },
  ];
  return (
    <div className="flex gap-2">
      {containers.map((container) => (
        <div
          key={container.label}
          className="border border-black rounded-md sm:px-8 sm:py-4  flex flex-col sm:gap-2 items-center  w-52 py-4 gap-4 max-sm:text-sm"
        >
          <Link
            href={`/issues/?status=${container.status}`}
            className="hover:text-violet-800 hover:underline"
          >
            {container.label}
          </Link>
          <h1>{container.value}</h1>
        </div>
      ))}
    </div>
  );
};
export default StatusCard;
