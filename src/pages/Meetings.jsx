import { Funnel, Plus, RefreshCcw } from "lucide-react";
import { FaSearch } from "react-icons/fa";
import MeetingCard from "../components/Meeting/Main/Card/MeetingCard";
import { useState, useMemo } from "react";
import ScheduleMeetingModal from "../components/Meeting/Main/Model/ScheduleMeetingModal";
import FilterTabs from "../components/Meeting/Main/Tab/FilterTabs";



export default function Meetings() {
  const [open, setOpen] = useState(false);
  const [meetings, setMeetings] = useState([
    {
      id: 1,
      platform: "Zoom",
      title: "Weekly Team  Standup",
      startTime: "2025-12-17T10:00:00",
      endTime: "2025-12-17T11:30:00",
      avatarCount: 7,
      isDoc: true
    },
    {
      id: 2,
      platform: "Google Meet",
      title: " Product Review",
      startTime: "2025-12-17T19:30:00",
      endTime: "2025-12-17T21:15:00",
      avatarCount: 4,
      isDoc: false
    },

    {
      id: 3,
      platform: "Zoom",
      title: "Design Sync",
      startTime: "2025-12-18T09:30:00",
      endTime: "2025-12-18T10:15:00",
      avatarCount: 5,
      isDoc: false
    },
    {
      id: 4,
      platform: "Teams",
      title: "Sprint Planning",
      startTime: "2025-12-19T11:00:00",
      endTime: "2025-12-19T12:30:00",
      avatarCount: 9,
      isDoc: false
    },
    {
      id: 5,
      platform: "Zoom",
      title: "Client Discussion",
      startTime: "2025-12-20T16:00:00",
      endTime: "2025-12-20T17:00:00",
      avatarCount: 3,
      isDoc: false
    },
    {
      id: 6,
      platform: "Google Meet",
      title: " Marketing Update",
      startTime: "2025-12-21T13:00:00",
      endTime: "2025-12-21T13:45:00",
      avatarCount: 6,
      isDoc: true
    },
    {
      id: 7,
      platform: "Zoom",
      title: "Engineering Review",
      startTime: "2025-12-17T22:30:00",
      endTime: "2025-12-17T23:30:00",
      avatarCount: 8,
      isDoc: true
    },
  ]);



  const getMeetingType = (startTime, endTime) => {
    const now = new Date();
    const start = new Date(startTime);
    const end = new Date(endTime);

    if (now >= start && now <= end) return "ongoing";
    if (now < start) return "upcoming";
    return "past";
  };

  const [activeFilter, setActiveFilter] = useState("all");

  const filteredMeetings = useMemo(() => {
    if (activeFilter === "all") return meetings;

    return meetings.filter(
      (m) => getMeetingType(m.startTime, m.endTime) === activeFilter
    );
  }, [activeFilter, meetings]);

  return (
    <div className="w-full min-h-screen mt-3 py-5 bg-[#FFFFFF] dark:bg-black px-2 sm:px-5 xl:px-10 flex flex-col items-center">

     
      <div className="flex flex-col gap-9 w-full max-w-[1440px]">

        {/* Title + Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-5 w-full">
          {/* Title & Subtitle */}
          <div className="flex flex-col gap-4 flex-1">
            <h1 className="text-4xl sm:text-2xl font-bold text-[#000000] dark:text-[#F5F5F5]">Meetings</h1>
            <p className="text-lg xm:text-sm text-[#000000] dark:text-[#F5F5F5]">
              Manage your schedule and prepare for upcoming calls
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 justify-end flex-1">
            <div className="flex items-center gap-2 justify-center px-3 sm:px-4 py-2 rounded-2xl shadow-[0_3px_10px_0_rgba(0,0,0,0.25)] dark:bg-[#383838]">
              <RefreshCcw size={15} className="text-[#000000] dark:text-[#656565]" />
              <p className="text-sm font-medium text-[#000000] dark:text-[#D5D5D5]">Sync Calendar</p>
            </div>
            <div
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 justify-center px-3 xl:px-4 py-2 rounded-2xl bg-[#2461E6] dark:bg-[#73FBFD]"
            >
              <Plus size={16} className="text-[#EDEDED] dark:text-[#2E2F2F]" />
              <p className="text-sm font-medium text-[#EDEDED] dark:text-[#2E2F2F]">Schedule New</p>
            </div>
          </div>
        </div>

        {/* Filters + Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 w-full px-2 sm:px-5">
          <div className="w-full sm:flex-1">
            <FilterTabs activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 justify-center sm:justify-end w-full sm:w-auto">
            {/* Filter Button */}
            <div className="bg-[#EDEDED] dark:bg-[#383838] rounded-3xl px-3 py-2 flex gap-2 items-center">
              <Funnel size={20} className="text-[#393838] dark:text-[#D2D2D2]" />
              <p className="text-sm text-[#393838] dark:text-[#D2D2D2]">Filter</p>
            </div>

            {/* Search Box */}
            <div className="w-full sm:w-[260px]">
              <div className="flex items-center justify-between px-3 py-2 rounded-[20px] bg-[#EDEDED] dark:bg-[#383838] border border-transparent w-full">
                <FaSearch className="text-xl text-[#8a8f99]" />
                <input
                  type="text"
                  placeholder="Search meetings, documents..."
                  className="w-full text-sm placeholder:text-xs sm:placeholder:text-sm bg-transparent dark:placeholder:text-[#D5D5D5] outline-none border-none text-black pl-3"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-[#E0DDDD] dark:bg-[#575757]" />

      </div>

   
      <div className="flex flex-wrap mt-8 gap-10 justify-center w-full max-w-[1440px] pb-10">
        {filteredMeetings.map((meeting) => (
          <MeetingCard
            key={meeting.id}
            platform={meeting.platform}
            title={meeting.title}
            startTime={meeting.startTime}
            endTime={meeting.endTime}
            avatarCount={meeting.avatarCount}
            isDoc={meeting.isDoc}
          />
        ))}
      </div>

     
      {open && (
        <ScheduleMeetingModal
          onClose={() => setOpen(false)}
          onSave={(meeting) => setMeetings((prev) => [meeting, ...prev])}
        />
      )}
    </div>

  )
}
