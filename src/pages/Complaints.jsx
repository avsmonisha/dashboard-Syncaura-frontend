import { useEffect, useState } from "react";
import {
  Circle,
  CircleAlert,
  CircleCheck,
  Clock,
  Eye,
  Funnel,
  Plus,
  Search,
} from "lucide-react";
import NewComplaintModal from "../components/complaints/NewComplaintModal";
import { COMPLAINTS } from "../constant/constant";
import ComplaintsList from "../components/complaints/ComplaintsList/ComplaintsList";
import Complaintheader from "../components/complaints/complaintHeader/Complaintheader";

export default function Complaints() {
  const [activeId, setActiveId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchComplaints, setSearchComplaints] = useState("");
  const [debounceSearch, setDebounceSearch] = useState("");
  const [filterComplaint, setFilterComplaint] = useState(COMPLAINTS);


  useEffect(() => {
    if (!searchComplaints.trim()) {
      setDebounceSearch("");
      return;
    }

    const timer = setTimeout(() => {
      setDebounceSearch(searchComplaints.trim());
    }, 500);

    return () => clearTimeout(timer);
  }, [searchComplaints]);


  useEffect(() => {
    if (!debounceSearch) {
      setFilterComplaint(COMPLAINTS);
      return;
    }

    const search = debounceSearch.toLowerCase();

    const filtered = COMPLAINTS.filter(item =>
      item.category.toLowerCase().includes(search) ||
      item.subject.toLowerCase().includes(search) ||
      item.status.toLowerCase().includes(search)
    );

    setFilterComplaint(filtered);
  }, [debounceSearch]);


  const statusStyle = (status) => {
    if (status === "open") return "bg-[#FFC2C2] text-[#C71212]";
    if (status === "in progress") return "bg-[#FEF2C2] text-[#C05328]";
    return "bg-[#D1FAE5] text-[#29CC39]";
  };

  const statusIcon = (status) => {
    if (status === "open")
      return <CircleAlert className="size-4 text-[#C71212] fill-[#FFC2C2]" />;
    if (status === "in progress")
      return <Clock className="size-4 text-[#C05328]   " />;
    return <CircleCheck className="size-4 text-[#29CC39] fill-[#D1FAE5]  " />;
  };

  return (
    <div className="relative w-full transition-colors duration-500  border-t dark:border-[#000000] h-full bg-[#FFFFFF] dark:bg-[#2E2F2F]  pt-6 pb-24 overflow-hidden">
      <Complaintheader
        search={searchComplaints}
        setSearch={setSearchComplaints}
      />

      <ComplaintsList
        COMPLAINTS={filterComplaint}
        activeId={activeId}
        setActiveId={setActiveId}
        statusStyle={statusStyle}
        statusIcon={statusIcon}
      />

      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-8 right-8 flex items-center gap-2
                   rounded-full bg-blue-600 dark:bg-[#73FBFD] dark:text-black transition duration-500 px-6 py-3
                   text-white shadow-lg hover:bg-blue-400 dark:hover:bg-[#2cc4c7]"
      >
        <Plus size={18} />
        New Complaint
      </button>

      {showModal && <NewComplaintModal addComplaint={setFilterComplaint} onClose={() => setShowModal(false)} />}
    </div>
  );
}
