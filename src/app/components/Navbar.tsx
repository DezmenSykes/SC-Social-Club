import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Spinner from "./Spinner";
import { Sign } from "crypto";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl text-blue-600">
          SC Social Club
        </Link>
      </div>
      {/* CENTER */}
      <div className="hidden md:flex w-[50%] text-sm">
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/home.png"
              width={16}
              height={16}
              alt="Homepage"
              className="w-4 h-4"
            />
            <span>Home</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/friends.png"
              width={16}
              height={16}
              alt="Homepage"
              className="w-4 h-4"
            />
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/stories.png"
              width={16}
              height={16}
              alt="Homepage"
              className="w-4 h-4"
            />
            <span>Stories</span>
          </Link>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-[30%] flex items-center xl:gap-8 gap-4 justify-end">
        <ClerkLoading>
          <Spinner />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="flex items-center text-sm gap-4 text-gray-500">
              <div className="cursor-pointer">
                <Image src="/people.png" width={24} height={24} alt="Profile" />
              </div>
              <div className="cursor-pointer">
                <Image
                  src="/messages.png"
                  width={24}
                  height={24}
                  alt="Profile"
                />
              </div>
              <div className="cursor-pointer">
                <Image
                  src="/notifications.png"
                  width={24}
                  height={24}
                  alt="Profile"
                />
              </div>
              <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            <div className="flex items-center text-sm gap-4 text-gray-500">
              <Image src="/noAvatar.png" width={24} height={24} alt="Profile" />
              <Link href="/sign-in">Login | Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
