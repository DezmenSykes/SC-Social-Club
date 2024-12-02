import { switchFollow } from "@/lib/actions";
import React, { useState } from "react";

interface UserInfoCardInteraction {
  currentUserId: string | null;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowSent: boolean;
  userId: string;
}

const UserInfoCardInteraction = ({
  currentUserId,
  isFollowing,
  isFollowSent,
  isUserBlocked,
  userId,
}: UserInfoCardInteraction) => {
  const [userState, setUserState] = useState({
    following: isFollowing,
    blocked: isUserBlocked,
    followRequestSent: isFollowSent,
  });

  const follow = async () => {
    try {
      await switchFollow(userId);
      setUserState((prev) => ({
        ...prev,
        following: prev.following && false,
        followRequestSent:
          !prev.followRequestSent && !prev.following ? true : false,
      }));
    } catch (error) {}
  };
  return (
    <>
      <form action="" className="" method="post">
        <button className="w-full bg-blue-500 text-white text-sm rounded-md p-2">
          {userState.following
            ? "Following"
            : userState.followRequestSent
            ? "Request Sent"
            : "Follow"}
        </button>
      </form>
      <form action="" className="self-end">
        <span className="text-red-400 self-end text-xs cursor-pointer">
          {userState.blocked ? "Unblock" : "Block"}
        </span>
      </form>
    </>
  );
};

export default UserInfoCardInteraction;
