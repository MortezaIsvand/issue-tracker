import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";

const BackButton = ({ href }: { href: string }) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 border w-fit px-2 py-1.5 hover:bg-gray-50 rounded-md"
    >
      <IoChevronBack />
      BACK
    </Link>
  );
};
export default BackButton;
