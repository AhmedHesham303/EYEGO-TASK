// components/Sidebar.jsx
"use client";
import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
  const items = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Users", href: "/dashboard/users" },
    { name: "Analytics", href: "/dashboard/analytics" },
  ];

  return (
    <aside className="w-64 bg-white border-r  flex flex-col ">
      <div className="flex items-center justify-center">
        <Image src="/eyegoai_logo.jpeg" alt="Logo" width={120} height={40} />
      </div>
      <ul className="p-8 flex flex-col gap-4 text-lg ">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="hover:text-blue-600 font-medium">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
