import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { AiFillBug } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";

const NavBar = async () => {
  const session = await getServerSession();
  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues", label: "Issues" },
  ];
  return (
    <nav className="flex gap-16 max-sm:gap-8 items-center p-4 border-b justify-between">
      <div className="flex gap-8 max-sm:gap-4 items-center">
        <Link href={"/"} title="Home">
          <AiFillBug />
        </Link>
        <div className="flex items-center gap-2">
          {links.map((link) => (
            <Link href={link.href} key={link.label}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      {session ? (
        <div className="flex gap-4   items-center">
          <Image
            src={session.user?.image!}
            alt="Profile image"
            className="rounded-full "
            width={25}
            height={25}
          />
          <Link href={"/api/auth/signout"} title="Log out" className="pr-8">
            <FiLogOut />
          </Link>
        </div>
      ) : (
        <Link href={"/api/auth/signin"} title="Log in" className="pr-8">
          <FiLogIn />
        </Link>
      )}
    </nav>
  );
};
export default NavBar;
