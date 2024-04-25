import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-5xl pb-5">HOME</h1>
      <Link href="/about" className="pl-3 pb-5">
        about
      </Link>
      <Link href="/help" className="pl-3 pb-5">
        help
      </Link>
    </main>
  );
}
