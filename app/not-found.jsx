'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-[#448AFF] text-white">
      <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-200">Redirecting you to the homepage...</p>
    </main>
  );
}
