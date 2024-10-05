'use client';

import Link from "next/link";

export const Navigation = () => {
  return (
    <header className="shadow-lg shadow-gray-100 mb-10">
      <div className="mx-auto flex max-w-screen-md items-center justify-between px-4">
        <Link href='/' className="text-xl font-bold">
          T3Stack
        </Link>
      </div>
    </header>
  )
}