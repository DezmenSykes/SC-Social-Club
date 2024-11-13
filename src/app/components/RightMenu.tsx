import React, { Suspense } from "react";
import FriendRequests from "./FriendRequests";
import BirthDays from "./BirthDays";
import Ads from "./Ads";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";
import { User } from "@prisma/client";

const RightMenu = ({ user }: { user: User }) => {
  return (
    <div className="flex flex-col gap-6">
      {user ? (
        <>
          <Suspense fallback={<div>Loading...</div>}>
            <UserInfoCard user={user} />
          </Suspense>
          <UserMediaCard user={user} />
        </>
      ) : null}
      <FriendRequests />
      <BirthDays />
      <Ads size="md" />
    </div>
  );
};

export default RightMenu;
