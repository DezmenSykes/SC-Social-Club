import React from "react";
import FriendRequests from "./FriendRequests";
import BirthDays from "./BirthDays";
import Ads from "./Ads";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className="flex flex-col gap-6">
      {userId ? (
        <>
          <UserInfoCard userId={userId} />
          <UserMediaCard userId={userId} />
        </>
      ) : null}
      <FriendRequests />
      <BirthDays />
      <Ads size="md" />
    </div>
  );
};

export default RightMenu;
