import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-5xl text-blue-700 pb-5">about</h1>
      <Link href="/" className="pl-3 pb-5">
        home
      </Link>
    </div>
  );
};

export default page;
