"use client";
import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-white shadow px-8 ">
      <Image src="/eyegoai_logo.jpeg" alt="Logo" width={60} height={20} />
      <Link href="/" className="text-blue-600 hover:underline">
        Logout
      </Link>
    </nav>
  );
}
