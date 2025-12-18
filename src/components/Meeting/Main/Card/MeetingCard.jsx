import { Video, Camera, Monitor, ArrowRight } from "lucide-react";
import useThemeStore from "../../../../store/useThemeStore"
import { TbBrandGoogleDrive, TbBrandTeams } from "react-icons/tb";

function getMeetingStatus(startTime, endTime) {
  const now = new Date();
  const start = new Date(startTime);
  const end = endTime ? new Date(endTime) : null;

  const isToday = start.toDateString() === now.toDateString();
  const isPast = end ? now > end : now > start;

  const isLive =
    isToday && end && now >= start && now <= end;

  const tomorrow = new Date();
  tomorrow.setDate(now.getDate() + 1);

  if (isPast) {
    return {
      label: "COMPLETED",
      textColor: "text-gray-500",
      bgColor: "bg-gray-100",
      dotColor: "bg-gray-400",
    };
  }

  if (isLive) {
    return {
      label: "LIVE NOW",
      textColor: "text-[#C71212]",
      bgColor: "bg-[#FBB7B7]",
      dotColor: "bg-[#F35353]",
    };
  }

  if (isToday) {
    return {
      label: "TODAY",
      textColor: "text-[#2461E6]",
      bgColor: "bg-[#D5F7F7]",
      dotColor: "bg-[#2461E6]",
    };
  }

  if (start.toDateString() === tomorrow.toDateString()) {
    return {
      label: "TOMORROW",
      textColor: "text-[#2461E6]",
      bgColor: "bg-[#D5F7F7]",
      dotColor: "bg-[#2461E6]",
    };
  }

  return {
    label: start.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "2-digit",
    }),
    textColor: "text-[#2461E6]",
    bgColor: "bg-[#D5F7F7]",
    dotColor: "bg-[#2461E6]",
  };
}



function formatMeetingTime(startTime, endTime) {
  const start = new Date(startTime);
  const end = endTime ? new Date(endTime) : null;

  const format = (date) =>
    date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  if (!end) return format(start);

  return `${format(start)} - ${format(end)}`;
}



export default function MeetingCard({
  platform,
  title,
  startTime,
  endTime,
  avatarCount,
  isDoc
}) {
  const { isDark } = useThemeStore();

  const status = getMeetingStatus(startTime, endTime);

  const MAX_VISIBLE = 3;
  const visibleAvatars = Math.min(avatarCount, MAX_VISIBLE);
  const extraCount = avatarCount > MAX_VISIBLE ? avatarCount - MAX_VISIBLE : 0;

  const isCompleted = status.label === "COMPLETED";
  const now = new Date();
  const startDateTime = new Date(startTime);

  const isUpcoming = startDateTime > now;

  return (
    <div
      className="
        w-[270px]
        xl:w-[280px]
        rounded-[20%_20%]
        bg-white dark:bg-[#2E2F2F]
        shadow-[0_4px_10px_0_rgba(0,0,0,0.25)]
        px-5 md:px-4 xl:px-7 
        py-8 md:py-6 sm:py-7 2xl:py-8
        space-y-3
        transition
      "
    >
      {/* Status + Platform */}
      <div className="flex items-center justify-between">
        <span
          className={`flex items-center gap-1 text-[10px] sm:text-xs font-semibold px-2 py-1 rounded-full
            ${status.textColor} ${status.bgColor}`}
        >
          <span className={`size-2 rounded-full ${status.dotColor}`} />
          {status.label}
        </span>

        <div className="flex items-center gap-1 text-xs sm:text-sm text-black dark:text-[#F5F5F5]">
          {platform === "Zoom" ? (
            <Video className="size-4 sm:size-5" />
          ) : platform === "Google Meet" ? (
            <TbBrandGoogleDrive className="size-4 sm:size-5" />
          ) : (
            <TbBrandTeams className="size-4 sm:size-5" />
          )}
          {platform === "Google Meet" ? "Meet" : platform}
        </div>
      </div>

      <h3 className="
  font-semibold
  text-lg sm:text-xl 2xl:text-2xl
  leading-snug
  text-gray-900 dark:text-[#F5F5F5]
  line-clamp-2
">
        {title}
      </h3>


      {/* Time */}
      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-[#F5F5F5]">
        <span className="size-4 sm:size-5 flex items-center justify-center">
          <img
            src={
              isDark
                ? "/images/Meeting/dark/clock.png"
                : "/images/Meeting/clock.png"
            }
            alt="clock"
          />
        </span>
        <p>{formatMeetingTime(startTime, endTime)}</p>
      </div>

      {/* Avatars */}
      <div className="flex items-center  -space-x-6 gap-2">
        <div className="flex -space-x-3">
          {Array.from({ length: visibleAvatars }).map((_, i) => (
            <img
              key={i}
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
              className="size-7 sm:size-8 2xl:size-9 rounded-full border-2 border-white"
            />
          ))}
        </div>

        {extraCount > 0 && (
          <span className="size-7 sm:size-8 text-xs sm:text-sm font-semibold flex items-center justify-center text-black bg-[#E0DDDD] rounded-full border border-white">
            +{extraCount}
          </span>
        )}
      </div>

      <div className="h-px w-full bg-[#E0DDDD] dark:bg-black" />

      {/* Actions */}
      <div className="flex  items-center gap-4 sm:gap-6 justify-center pt-2">
        <button
          disabled={isCompleted}
          className={`
    w-full sm:w-auto
    px-8 py-2
    rounded-full
    flex items-center justify-center
    text-sm font-semibold flex-3/5 
    shadow-[0_4px_10px_0_rgba(0,0,0,0.25)]
    transition
    ${isCompleted
              ? "bg-red-500 dark:bg-[#1E293B] dark:text-[#94A3B8] text-yellow-300 cursor-not-allowed"
              : isUpcoming
                ? "bg-[#D9D9D9] dark:bg-[#5e5c5c] dark:text-[#73FBFD] text-gray-700 cursor-pointer"
                : "bg-blue-600 hover:bg-blue-700 dark:bg-[#73FBFD] dark:text-[#2E2F2F] text-white"
            }
  `}
        >
          {isCompleted
            ? "Completed"
            : isUpcoming
              ? <div div className="flex items-center justify-center gap-5 ">
               <ArrowRight className="size-5 dark:text-[#73FBFD]" /> <span>Details</span>
              </div>
              : "Join Now"}
        </button>


        <div className="flex flex-2/5 items-center gap-3">
          <img
            src={
              isDark
                ? "/images/Meeting/dark/user.png"
                : "/images/Meeting/user.png"
            }
            className={isDark ? "h-6 w-8" : "size-6"}
          />
          {isDoc && <img
            src={
              isDark
                ? "/images/Meeting/dark/document.png"
                : "/images/Meeting/document.png"
            }
            className="size-6"
          />}
        </div>
      </div>
    </div>
  );
}
