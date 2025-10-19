"use client";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
export default function Navbar() {
  const items = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Users", href: "/dashboard/users" },
  ];
  const dispatch = useDispatch();
  const router = useRouter();
  const handelLogoutEvent = () => {
    dispatch(logoutAdmin()).then(() => {
      router.push("/");
    });
  };
  return (
    <nav className="flex justify-between items-center bg-white shadow px-8 ">
      <Image src="/eyegoai_logo.jpeg" alt="Logo" width={60} height={20} />
      <ul className=" flex  gap-4 text-sm md:hidden">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="hover:text-blue-600 font-medium transition-colors"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/" className="text-blue-600 hover:underline">
        <button onClick={handelLogoutEvent} className="hover:cursor-pointer">
          Logout
        </button>
      </Link>
    </nav>
  );
}
