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
    <div className="flex flex-col gap-3">
      <button className="w-full bg-blue-500 text-white text-sm rounded-md p-2">
        {isFollowing ? "Following" : isFollowSent ? "Request Sent" : "Follow"}
      </button>
      <span className="text-red-400 flex self-end text-xs cursor-pointer">
        {isUserBlocked ? "Unblock" : "Block"}
      </span>
    </div>
  );
};

export default UserInfoCardInteraction;
