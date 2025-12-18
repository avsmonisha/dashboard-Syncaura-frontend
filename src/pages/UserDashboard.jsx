import Announcements from "../components/userdashboard/DashboardComponents/Announcements";
import MeetingsToday from "../components/userdashboard/DashboardComponents/MeetingsToday";
import StatsCard from "../components/userdashboard/DashboardComponents/StatsCard";
import TaskList from "../components/userdashboard/DashboardComponents/TaskList";

export default function UserDashboard() {
  const statsData = [
    { title: "Due Today", value: 4, percentage: "+12%", iconBg: "bg-blue-50", percentageBg: "bg-blue-200", percentageText: "text-blue-700" },
    { title: "Pending Tasks", value: 12, percentage: "+12%", iconBg: "bg-orange-50", percentageBg: "bg-orange-200", percentageText: "text-orange-500", iconColor: "text-orange-400" },
    { title: "Completed Tasks", value: 26, percentage: "+12%", iconBg: "bg-green-50", percentageBg: "bg-green-100", percentageText: "text-green-600", iconColor: "text-green-600" },
  ];

  return (
    <div className="w-full min-h-screen bg-[#f6f7fb] px-3 sm:px-5 lg:px-8 flex flex-col items-center justify-start space-y-8 py-10">

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-[1440px]">
        {statsData.map((item, idx) => (
          <div key={idx} className="w-full flex justify-center">
            <StatsCard {...item} />
          </div>
        ))}
      </div>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-20 gap-6 w-full max-w-[1440px]">
        {/* LEFT SIDE — Task List */}
        <div className="col-span-1 lg:col-span-14 w-full">
          <TaskList />
        </div>

        {/* RIGHT SIDE — Announcements + Meetings */}
        <div className="col-span-1 lg:col-span-6 w-full flex flex-col gap-4">
          <Announcements />
          <MeetingsToday />
        </div>
      </div>

    </div>
  );
}
