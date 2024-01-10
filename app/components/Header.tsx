import Link from "next/link";
import { auth, UserButton } from "@clerk/nextjs";

export default function Header() {
  const { userId } = auth();

  return (
    <nav className="bg-blue-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <span className="text-white text-lg font-bold">
              Clerk Authentication
            </span>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {userId ? (
            <>
              <Link
                href="/dashboard"
                className="text-white hover:text-gray-300"
              >
                Dashboard
              </Link>
            </>
          ) : (
            <>
              <Link href="/" className="text-white hover:text-gray-300">
                Home
              </Link>

              <Link href="/sign-in" className="text-white hover:text-gray-300">
                Sign In
              </Link>
              <Link href="/sign-up" className="text-white hover:text-gray-300">
                Sign Up
              </Link>
            </>
          )}
          <UserButton afterSignOutUrl="/" userProfileMode="navigation" userProfileUrl="/profile" />
        </div>
      </div>
    </nav>
  );
}
