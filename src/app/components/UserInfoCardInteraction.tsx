import React from "react";

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
  return (
    <>
      <form action="" className="" method="post">
        <button className="w-full bg-blue-500 text-white text-sm rounded-md p-2">
          {isFollowing ? "Following" : isFollowSent ? "Request Sent" : "Follow"}
        </button>
      </form>
      <form action="" className="self-end">
        <span className="text-red-400 self-end text-xs cursor-pointer">
          {isUserBlocked ? "Unblock" : "Block"}
        </span>
      </form>
    </>
  );
};

export default UserInfoCardInteraction;
