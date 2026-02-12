import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMedia } from "../context/MediaContext";
// import {motion, AnimatePresence} from "framer-motion"
import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  PhoneOff,
  Monitor,
  Users,
  MessageSquare,
  MoreVertical,
  X,
  Copy,
  Send,
  Search,
  Smile,
  Hand,
  CircleAlert,
  MessageSquareText,
  UserLock,
  ChevronUp,
  ChevronDown,
  SendHorizonal,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const PARTICIPANTS = [
  { id: 1, name: "John Dev", initial: "J", color: "#C94A5C", isHost: true },
  { id: 2, name: "Karthik S", initial: "K", color: "#10B981" },
  { id: 3, name: "Lavanya K", initial: "L", color: "#D9923F" },
  { id: 4, name: "Diya P", initial: "D", color: "#B91C1C" },
  { id: 5, name: "Aarav M", initial: "A", color: "#8B5CF6" },
  { id: 6, name: "Diya P", initial: "D", color: "#B23939" },
  { id: 7, name: "Rahul T", initial: "R", color: "#5B6FC7" },
  { id: 8, name: "Aarav M", initial: "A", color: "#059669" },
  { id: 9, name: "Sneha R", initial: "S", color: "#16A34A" },
  { id: 10, name: "Vikram J", initial: "V", color: "#C77D3F" },
  { id: 11, name: "Ananya L", initial: "A", color: "#14B8A6" },
  { id: 12, name: "Aarav M", initial: "A", color: "#8B5CF6" },
  { id: 13, name: "Vikram J", initial: "V", color: "#C77D3F" },
  { id: 14, name: "Ananya L", initial: "A", color: "#14B8A6" },
  { id: 15, name: "Ananya L", initial: "A", color: "#14B8A6" },
];
function generateGradient(color) {
  // convert hex → rgb
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);

  // lighter version
  const light = `rgb(${Math.min(r + 40, 255)}, ${Math.min(g + 40, 255)}, ${Math.min(b + 40, 255)})`;

  // darker version
  const dark = `rgb(${Math.max(r - 60, 0)}, ${Math.max(g - 60, 0)}, ${Math.max(b - 60, 0)})`;

  return `radial-gradient(circle at 30% 30%, ${light} 0%, ${color} 45%, ${dark} 100%)`;
}

const FlowbitMeetingPage = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.theme.isDark);

  const [gridLayout, setGridLayout] = useState({
    cols: 1,
    rows: 1,
    cardWidth: 0,
    cardHeight: 0,
  });
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      message: "Hey bro, you free ah? Need to ask something.",
      isMe: false,
    },
    { id: 2, message: "Ya I'm free. What do you want to ask?", isMe: true },
  ]);
  const [raisedHands, setRaisedHands] = useState([]);
  const [emojiReactions, setEmojiReactions] = useState({});
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [activePanel, setActivePanel] = useState(null);

  const participants = PARTICIPANTS;

  const [controllerHeight, setControllerHeight] = useState(0);
  const gridRef = useRef(null);
  const controllerRef = useRef(null);
  const [gridHeight, setGridHeight] = useState("100vh");
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(8);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      const controllerH = controllerRef.current?.clientHeight || 0;
      setGridHeight(`calc(100vh - ${controllerH}px)`);
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    const measure = () => {
      if (controllerRef.current) {
        setControllerHeight(controllerRef.current.clientHeight);
      }
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const emojiList = ["👍", "👏", "❤️", "😂", "🎉", "🙌"];

  const {
    localStream,
    isMicOn,
    isCameraOn,
    isScreenSharing,
    startMedia,
    toggleMic,
    toggleCamera,
    startScreenShare,
    stopScreenShare,
  } = useMedia();

  useEffect(() => {
    startMedia();
  }, []);
  const sendEmojiReaction = (emoji) => {
    const id = Date.now();

    setEmojiReactions((prev) => ({
      ...prev,
      [id]: emoji,
    }));

    setTimeout(() => {
      setEmojiReactions((prev) => {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      });
    }, 2000);
  };

  useEffect(() => {
    const calculateLayout = () => {
      if (!gridRef.current) return;

      const width = gridRef.current.clientWidth;
      const total = participants.length;

      if (width < 768) {
        setPerPage(8);

        const totalPages = Math.ceil(total / perPage);
        setPages(totalPages);

        // prevent overflow page
        if (currentPage >= totalPages) {
          setCurrentPage(totalPages - 1);
          return;
        }

        const remaining = total - currentPage * perPage;
        const currentCount = Math.min(8, remaining);

        let cols = 1;
        let rows = 1;

        switch (currentCount) {
          case 8:
          case 7:
            cols = 2;
            rows = 4;
            break;
          case 6:
            cols = 2;
            rows = 3;
            break;
          case 5:
            cols = 2;
            rows = 3;
            break;
          case 4:
            cols = 2;
            rows = 2;
            break;
          case 3:
            cols = 1;
            rows = 3;
            break;
          case 2:
            cols = 1;
            rows = 2;
            break;
          case 1:
            cols = 1;
            rows = 1;
            break;
          default:
            cols = 1;
            rows = 1;
        }

        setGridLayout({
          cols,
          rows,
          cardWidth: 0,
          cardHeight: 0,
        });
      } else if (width >= 768 && width < 1280) {
        setPerPage(9);

        const totalPages = Math.ceil(total / 9);
        setPages(totalPages);

        // prevent overflow page
        if (currentPage >= totalPages) {
          setCurrentPage(totalPages - 1);
          return;
        }

        const remaining = total - currentPage * 9;
        const currentCount = Math.min(9, remaining);

        let cols = 1;
        let rows = 1;

        switch (currentCount) {
          case 9:
            cols = 3;
            rows = 3;
            break;

          case 8:
          case 7:
            cols = 3;
            rows = 3;
            break;

          case 6:
            cols = 2;
            rows = 3;
            break;

          case 5:
            cols = 2;
            rows = 3;
            break;

          case 4:
            cols = 2;
            rows = 2;
            break;

          case 3:
            cols = 2;
            rows = 3;
            break;

          case 2:
            cols = 2;
            rows = 1;
            break;

          case 1:
            cols = 1;
            rows = 1;
            break;

          default:
            cols = 1;
            rows = 1;
        }

        setGridLayout({
          cols,
          rows,
          cardWidth: 0,
          cardHeight: 0,
        });
      } else if (width >= 1024) {
        setPerPage(12);

        const totalPages = Math.ceil(total / 12);
        setPages(totalPages);

        // prevent overflow page
        if (currentPage >= totalPages) {
          setCurrentPage(totalPages - 1);
          return;
        }

        const remaining = total - currentPage * 12;
        const currentCount = Math.min(12, remaining);

        let cols = 1;
        let rows = 1;

        switch (currentCount) {
          case 12:
            cols = 4;
            rows = 3;
            break;

          case 11:
          case 10:
          case 9:
            cols = 4;
            rows = 3;
            break;

          case 8:
          case 7:
            cols = 4;
            rows = 2;
            break;

          case 6:
          case 5:
            cols = 3;
            rows = 2;
            break;

          case 4:
            cols = 2;
            rows = 2;
            break;

          case 3:
            cols = 2;
            rows = 3;
            break;

          case 2:
            cols = 2;
            rows = 1;
            break;

          case 1:
            cols = 1;
            rows = 1;
            break;

          default:
            cols = 1;
            rows = 1;
        }

        setGridLayout({
          cols,
          rows,
          cardWidth: 0,
          cardHeight: 0,
        });
      }
    };

    calculateLayout();
    window.addEventListener("resize", calculateLayout);
    return () => window.removeEventListener("resize", calculateLayout);
  }, [participants, currentPage]);
  // const perPage = 8;
  const startIndex = currentPage * perPage;
  const visibleParticipants = participants.slice(
    startIndex,
    startIndex + perPage,
  );

  return (
    <div data-theme={isDarkTheme? "dark": "light"}
      className={`w-full h-screen  ${isDarkTheme ? "bg-black" : "bg-white"} rounded-xl shadow-lg overflow-hidden relative `}
    >
      {/* VIDEO GRID */}
      <div
        ref={gridRef}
        className="relative overflow-hidden flex gap-2 px-1.5 py-2 w-full "
        style={{
          height: gridHeight,
          background: isDarkTheme ? "#000000" : "#FFFFFF",
        }}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            initial={{
              y: direction === 1 ? "100%" : "-100%",
              opacity: 0,
              scale: 0.98,
            }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            exit={{
              y: direction === 1 ? "-100%" : "100%",
              opacity: 0,
              scale: 0.98,
            }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1], // smooth professional easing
            }}
            className="absolute inset-0 flex gap-2 px-1.5 py-2"
          >
            {[...Array(gridLayout.cols)].map((_, colIndex) => {
              const columnItems = visibleParticipants.filter(
                (_, index) => index % gridLayout.cols === colIndex,
              );

              return (
                <div
                  key={colIndex}
                  className="flex-1 flex flex-col gap-2 h-full"
                >
                  {columnItems.map((p) => {
                    const isLocal = p.isHost;

                    return (
                      <div
                        key={p.id}
                        className="relative rounded-xl h-full w-full overflow-hidden"
                        style={{ backgroundColor: p.color }}
                      >
                        {isLocal && localStream && isCameraOn ? (
                          <video
                            className="w-full h-full object-cover"
                            ref={(el) => el && (el.srcObject = localStream)}
                            autoPlay
                            muted
                          />
                        ) : (
                          <>
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),rgba(0,0,0,0.15))]" />
                            <div
                              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[25%] aspect-square rounded-full flex items-center justify-center
                        bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.3),rgba(0,0,0,0.1))] shadow-lg"
                            >
                              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow">
                                {p.initial}
                              </span>
                            </div>
                          </>
                        )}
                        {
                          raisedHands.includes(1) && p.id===1 &&(
                            <div className="absolute top-2 md:top-4 left-2 md:left-3 z-10 ">
                              <Hand className="size-5 md:size-6 text-white" />
                            </div>
                          )
                        }

                        <div className="absolute bottom-2 left-2 backdrop-blur px-2 py-1 rounded text-[10px] sm:text-xs md:text-sm lg:text-base 2xl:text-lg">
                          <span className="text-white font-medium">
                            {p.name}
                          </span>
                        </div>

                        <div className="absolute top-2 right-2 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex items-center justify-center rounded-full">
                          {isLocal && isMicOn ? (
                            <Mic size={14} color="white" />
                          ) : (
                            <MicOff size={14} color="white" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {pages > 1 && (
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 
                  flex flex-col items-center gap-3 
                  p-3 bg-gray-100 dark:bg-[#2a2a2a] 
                  rounded-l-2xl shadow-xl z-40"
        >
          {Array.from({ length: pages }).map((_, idx) => (
            <div
              key={idx}
              onClick={() => {
                if (idx > currentPage) {
                  setDirection(1); // next
                } else {
                  setDirection(-1); // prev
                }
                setCurrentPage(idx);
              }}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300
          ${
            currentPage === idx
              ? "bg-blue-500 scale-125"
              : "bg-gray-400 dark:bg-gray-600 hover:scale-110"
          }`}
            />
          ))}
        </div>
      )}

      {/* CONTROL BAR */}
      {/* CONTROL BAR */}
      <div
        ref={controllerRef}
        className={`absolute bottom-0 left-0 z-100 w-full ${isDarkTheme ? "bg-[#000000]" : "bg-[#FFFFFF]"}
  `}
      >
        {/* ================= DESKTOP ================= */}

        <div className="hidden md:flex items-center justify-between px-6 py-3">
          {/* LEFT */}
          <div className=" hidden lg:flex items-center gap-3">
            <MeetingTime meetingCode={"qfn-nohn-yup"} />
          </div>

          {/* CENTER CONTROLS */}
          <div className="flex items-center gap-3 relative">
            {/* MIC */}
            <button
              onClick={toggleMic}
              className={`w-15 h-11 rounded-full flex items-center justify-center transition
      ${
        !isMicOn
          ? "bg-red-200 text-red-600"
          : isDarkTheme
            ? "bg-[#2E2F2F] text-[#FFFFFF]"
            : " bg-[#F8F8F8]  text-[#000000] "
      }`}
            >
              {isMicOn ? <Mic size={20} /> : <MicOff size={20} />}
            </button>

            {/* CAMERA */}
            <button
              onClick={toggleCamera}
              className={`w-15 h-11 rounded-full flex items-center justify-center transition
      ${
        !isCameraOn
          ? "bg-red-200 text-red-600"
          : isDarkTheme
            ? "bg-[#2E2F2F] text-[#FFFFFF]"
            : " bg-[#F8F8F8]  text-[#000000] "
      }`}
            >
              {isCameraOn ? <Video size={20} /> : <VideoOff size={20} />}
            </button>

            {/* SCREEN SHARE */}
            <button
              onClick={() =>
                isScreenSharing ? stopScreenShare() : startScreenShare()
              }
              className={`w-15 h-11 rounded-full flex items-center justify-center transition
      ${
        isScreenSharing
          ? "bg-red-200 text-red-600"
          : isDarkTheme
            ? "bg-[#2E2F2F] text-[#FFFFFF]"
            : " bg-[#F8F8F8]  text-[#000000] "
      }`}
            >
              <Monitor size={20} />
            </button>

            {/* EMOJI */}
            <button
              onClick={() => setShowEmojiPicker((prev) => !prev)}
              className={`w-15 h-11 rounded-full ${isDarkTheme ? "bg-[#2E2F2F] text-[#FFFFFF]" : " bg-[#F8F8F8]  text-[#000000] "}  flex items-center justify-center`}
            >
              <Smile size={20} />
            </button>

            {/* CC */}
            <button
              className={`w-15 h-11 rounded-full  ${isDarkTheme ? "bg-[#2E2F2F] text-[#FFFFFF]" : " bg-[#F8F8F8]  text-[#000000] "} flex items-center justify-center text-sm font-semibold`}
            >
              CC
            </button>

            {/* RAISE HAND */}
            <button
              onClick={() =>
                setRaisedHands((prev) =>
                  prev.includes(1)
                    ? prev.filter((id) => id !== 1)
                    : [...prev, 1],
                )
              }
              className={`w-15 h-11 rounded-full flex items-center justify-center
      ${
        raisedHands.includes(1)
          ? "bg-blue-500 text-white"
          : isDarkTheme
            ? "bg-[#2E2F2F] text-[#FFFFFF]"
            : " bg-[#F8F8F8]  text-[#000000] "
      }`}
            >
              <Hand size={20} />
            </button>

          

            {/* END CALL */}
            <button className="px-6 h-11 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center">
              <PhoneOff size={20} />
            </button>

            {/* FLOATING EMOJIS */}
            <div className="pointer-events-none absolute inset-0 flex justify-center items-end z-40">
              <AnimatePresence>
                {Object.entries(emojiReactions).map(([id, emoji]) => (
                  <motion.div
                    key={id}
                    initial={{ y: 0, opacity: 0, scale: 0.8 }}
                    animate={{ y: -250, opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                    className="absolute text-5xl mb-24"
                  >
                    {emoji}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* EMOJI PICKER */}
            <AnimatePresence>
              {showEmojiPicker && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-16 left-1/2 -translate-x-1/2
          bg-white dark:bg-[#2a2a2a] shadow-lg rounded-full px-4 py-2
          flex gap-3 z-30"
                >
                  {emojiList.map((emoji) => (
                    <button
                      key={emoji}
                      onClick={() => {
                        sendEmojiReaction(emoji);
                        setShowEmojiPicker(false);
                      }}
                      className="text-2xl hover:scale-125 transition"
                    >
                      {emoji}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2 lg:gap-2 xl:gap-6">
            <button
              className={`${activePanel === "detail" && "bg-[#989696]"} p-2 rounded-full`}
              onClick={() => setActivePanel("detail")}
            >
              <CircleAlert
                className={`${activePanel === "detail" ? "" : ""} ${activePanel === "detail" ? "text-white" : isDarkTheme ? "" : "text-black"} text-sm`}
              />
            </button>
            <button
              className={`${activePanel === "people" && "bg-[#989696]"} p-2 rounded-full relative`}
              onClick={() => setActivePanel("people")}
            >
              <div
                className={`absolute -top-2.5 left-6 flex items-center justify-center rounded-full  p-0.5 ${isDarkTheme ? "" : "bg-[#EDEDED]"}`}
              >
                <h1 className={`text-xs ${isDarkTheme ? "" : "text-black"}`}>
                  {participants.length}
                </h1>
              </div>
              <Users
                className={`${activePanel === "detail" ? "" : ""} ${activePanel === "people" ? "text-white" : isDarkTheme ? "" : "text-black"} text-sm`}
              />
            </button>
            <button
              className={`${activePanel === "chat" && "bg-[#989696]"} p-2 rounded-full`}
              onClick={() => setActivePanel("chat")}
            >
              <MessageSquareText
                className={`${activePanel === "detail" ? "" : ""} ${activePanel === "chat" ? "text-white" : isDarkTheme ? "" : "text-black"} text-sm`}
              />
            </button>
            <button>
              <UserLock className={`${isDarkTheme ? "" : "text-black"}`} />
            </button>
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="flex md:hidden items-center justify-center gap-2 sm:gap-4 py-3 relative">
          {/* MIC */}
          <button
            onClick={toggleMic}
            className={`w-16 h-12 rounded-full flex items-center justify-center
      ${
        !isMicOn
          ? "bg-[#FFCACA] text-[#952B2B]"
          : isDarkTheme
            ? "bg-[#2E2F2F] text-[#FFFFFF]"
            : " bg-[#F8F8F8]  text-[#000000] "
      }
      }`}
          >
            {isMicOn ? <Mic size={22} /> : <MicOff size={22} />}
          </button>

          {/* CAMERA */}
          <button
            onClick={toggleCamera}
            className={`w-16 h-12 rounded-full flex items-center justify-center
      ${
        !isCameraOn
          ? "bg-[#FFCACA] text-[#952B2B]"
          : isDarkTheme
            ? "bg-[#2E2F2F] text-[#FFFFFF]"
            : " bg-[#F8F8F8]  text-[#000000] "
      }
      }`}
          >
            {isCameraOn ? <Video size={22} /> : <VideoOff size={22} />}
          </button>

          {/* SMILE */}
          <button
            onClick={() => setShowEmojiPicker((prev) => !prev)}
            className={`w-16 h-12 rounded-full  ${isDarkTheme ? "bg-[#2E2F2F] text-[#FFFFFF]" : " bg-[#F8F8F8]  text-[#000000] "} flex items-center justify-center`}
          >
            <Smile size={22} />
          </button>
            {/* MORE */}
            <button
              className={`w-15 h-11 rounded-full  ${isDarkTheme ? "bg-[#2E2F2F] text-[#FFFFFF]" : " bg-[#F8F8F8]  text-[#000000] "} flex items-center justify-center`}
            >
              <MoreVertical size={20} />
            </button>

          {/* END CALL */}
          <button className="w-16 h-12 rounded-full bg-red-500 flex items-center justify-center">
            <PhoneOff size={22} />
          </button>
          <div className="pointer-events-none absolute inset-0 flex justify-center items-end z-40">
            <AnimatePresence>
              {Object.entries(emojiReactions).map(([id, emoji]) => (
                <motion.div
                  key={id}
                  initial={{ y: 0, opacity: 0, scale: 0.8 }}
                  animate={{ y: -250, opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.8, ease: "easeOut" }}
                  className="absolute text-5xl mb-24"
                >
                  {emoji}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* EMOJI PICKER MOBILE */}
          <AnimatePresence>
            {showEmojiPicker && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bottom-16 left-1/2 -translate-x-1/2
          bg-white dark:bg-[#2a2a2a] shadow-lg rounded-full px-4 py-2
          flex gap-3 z-30"
              >
                {emojiList.map((emoji) => (
                  <button
                    key={emoji}
                    onClick={() => {
                      sendEmojiReaction(emoji);
                      setShowEmojiPicker(false);
                    }}
                    className="text-2xl hover:scale-125 transition"
                  >
                    {emoji}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* SIDE PANEL */}
      <AnimatePresence>
        {activePanel && (
          <>
            {/* 🔹 Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActivePanel(null)}
              className="fixed inset-0  bg-white/50 z-40"
            />

            {/* 🔹 Side Panel */}
            <motion.div
              initial={{ x: 360 }}
              animate={{ x: 0 }}
              exit={{ x: 360 }}
              transition={{ duration: 0.3 }}
              className={`fixed top-0 right-0 h-full w-full xsm:w-[360px]
                   ${isDarkTheme? "bg-black": "bg-white"}
                   shadow-xl z-100 xsm:z-50 flex flex-col xsm:pb-21`}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 ">
                <h3
                  className={`text-xl font-semibold ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  {activePanel === "chat"
                    ? "In Call Message"
                    : activePanel === "people"
                      ? "People"
                      : "Meeting Details"}
                </h3>
                <button onClick={() => setActivePanel(null)}>
                  <X className={`${isDarkTheme ? "text-white" : "text-black"} text-lg`} />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-auto ">
                {activePanel === "detail" && (
                  <MeetingDetail
                    isDarkTheme={isDarkTheme}
                    meetingLink="https://meet.google.com/qfn-nahn-yup"
                  />
                )}
                {activePanel === "people" && (
                  <PeopleDetail participants={participants} isDarkTheme={isDarkTheme} />
                )}
                {activePanel === "chat" && (
                  <ChatUI
                    chatMessages={chatMessages}
                    setChatMessages={setChatMessages}
                  />
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FlowbitMeetingPage;

const MeetingDetail = ({ meetingLink, isDarkTheme }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(meetingLink);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="flex items-start justify-start w-full px-5 mt-3 ">
      <div className="flex flex-col items-start justify-center w-full gap-4 ">
        <div className="flex flex-col items-start justify-center w-full gap-1 ">
          <h1
            className={`${isDarkTheme ? "text-white" : "text-black"} text-lg font-normal`}
          >
            Joining Information
          </h1>
          <p
            className={`${isDarkTheme ? "text-white" : "text-black"} text-base font-light`}
          >
            {meetingLink}
          </p>
        </div>

        {/* Copy Section */}
        <motion.div
          onClick={handleCopy}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
          className="relative flex items-center justify-start gap-3 cursor-pointer"
        >
          {/* Animated Icon */}
          <motion.div
            animate={copied ? { scale: [1, 1.3, 1] } : {}}
            transition={{ duration: 0.4 }}
          >
            <Copy
              className={`${
                isDarkTheme ? "text-[#73FBFD]" : "text-[#2461E6]"
              } size-5`}
            />
          </motion.div>

          <p
            className={`${
              isDarkTheme ? "text-[#73FBFD]" : "text-[#2461E6]"
            } text-base hover:underline`}
          >
            Copy Joining Info
          </p>

          {/* Tooltip */}
          <AnimatePresence>
            {copied && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className={`absolute -top-10 left-0 px-3 py-1 rounded-md text-xs shadow-md
                ${
                  isDarkTheme
                    ? "bg-white text-black"
                    : "bg-black text-white"
                }`}
              >
                Link copied successfully
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};


const PeopleDetail = ({ participants, isDarkTheme }) => {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-col w-full h-full px-5 gap-6 ">
      <div
        className={`
      flex items-center w-full py-1 px-2 xl:px-4 xl:py-2
      gap-3 xl:gap-5 rounded-xl border
      transition-all duration-200
      ${ isFocused ?  "border-blue-500 dark:border-[#73FBFD]" : "border-[#989696] dark:border-gray-300"}
    `}
      >
        <Search className="text-[#989696] size-6" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search for People"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="text-lg w-full placeholder:text-[#989696]
                 text-[#989696] font-normal
                 border-none outline-none bg-transparent"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 w-full min-h-0 gap-3">
        {/* Title */}
        <div className="flex items-center w-full">
          <p className="text-[#6C6969] dark:text-gray-200 text-base font-normal">IN THE MEETING</p>
        </div>

        <div className="flex-1 w-full  min-h-0">
          <MembersPanel />
        </div>
      </div>
    </div>
  );
};

const MembersPanel = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex flex-col w-full h-full   ">
      {/* Header (fixed height) */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center border rounded-t-2xl  border-gray-300 dark:border-[#575757] justify-between px-4 py-3 cursor-pointer select-none"
      >
        <div className="flex items-center gap-2">
          <span className="text-base font-medium text-gray-800 dark:text-gray-300">Members</span>
        </div>

        <div className="flex items-center justify-center gap-2 ">
          <h2 className="text-lg font-normal text-[#000000] dark:text-gray-300">
            {PARTICIPANTS.length}
          </h2>
          <motion.div
            animate={{ rotate: open ? 0 : 180 }}
            transition={{ duration: 0.25 }}
          >
            <ChevronUp size={18} className="text-gray-700 dark:text-gray-200" />
          </motion.div>
        </div>
      </div>

      {/* Scrollable List */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-y-auto  pb-2 min-h-0 w-full"
          >
            <div className="flex-1 border rounded-b-2xl  py-4  border-gray-300 dark:border-[#575757] overflow-y-auto px-2 min-h-0">
              {PARTICIPANTS.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between px-2 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-900 transition"
                >
                  {/* Left */}
                  <div className="flex items-center gap-3">
                    <div
                      className="size-10 flex items-center justify-center rounded-full text-white font-medium text-sm"
                      style={{
                        background: generateGradient(user.color),
                      }}
                    >
                      {user.initial}
                    </div>

                    <div className="flex flex-col gap-0.5">
                      <span className="text-lg font-normal text-black dark:text-white">
                        {user.name}
                      </span>
                      {user.isHost && (
                        <span className="text-xs font-light text-black -mt-1.5 dark:text-gray-300">
                          Meeting Host
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex items-center gap-3 text-gray-500">
                    <MicOff size={16} />
                    <MoreVertical size={16} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ChatUI = ({ chatMessages, setChatMessages }) => {
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);
  const containerRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  // Auto scroll to bottom
  const scrollToBottom = (smooth = true) => {
    bottomRef.current?.scrollIntoView({
      behavior: smooth ? "smooth" : "auto",
    });
  };

  // Scroll when new message added
  useEffect(() => {
    scrollToBottom(true);
  }, [chatMessages]);

  // Scroll to bottom when component first mounts
  useEffect(() => {
    scrollToBottom(false);
  }, []);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now(),
      message: input,
      isMe: true,
    };

    setChatMessages((prev) => [...prev, newMessage]);
    setInput("");

    // fake reply after 1 sec
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          message: "Got it dude",
          isMe: false,
        },
      ]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full w-full ">
      {/* Messages Container */}
      <div ref={containerRef} className="flex-1 overflow-y-auto px-4 py-4">
        <div className="flex flex-col min-h-full justify-end">
          <AnimatePresence initial={false}>
            {chatMessages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className={`max-w-[75%] mb-3 px-4 py-2 rounded-2xl text-sm shadow
            ${
              msg.isMe
                ? "ml-auto bg-blue-500 text-white dark:bg-[#73FBFD] dark:text-[#000000] rounded-br-md"
                : "mr-auto bg-gray-200 dark:bg-[#2E2F2F] dark:text-[#F8F8F8]   text-gray-800 rounded-bl-md"
            }`}
              >
                {msg.message}
              </motion.div>
            ))}
          </AnimatePresence>

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="p-3 ">
        <div className={`
      flex items-center w-full py-1 px-2 xl:px-4 xl:py-2
      gap-3 xl:gap-5 rounded-lg border
      transition-all duration-200
      ${isFocused ? "border-blue-500 ring-2 ring-blue-200" : "border-[#989696]"}
    `}>
          <input
            type="text"
            placeholder="Send a Message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
             onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="text-lg w-full placeholder:text-[#989696]
                 text-[#989696] font-normal
                 border-none outline-none bg-transparent"
          />
          <button
            onClick={sendMessage}
            className="text-gray-500 hover:text-blue-500 transition"
          >
            <SendHorizonal size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};


const MeetingTime = ({ meetingCode }) => {
  const [time, setTime] = useState("");
  const lastMinuteRef = useRef(null);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const currentMinute = now.getMinutes();

      // Only update UI if minute changed
      if (lastMinuteRef.current !== currentMinute) {
        lastMinuteRef.current = currentMinute;

        const formattedTime = now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });

        setTime(formattedTime);
      }
    };

    updateClock(); // run immediately

    const interval = setInterval(updateClock, 1000); // check every second

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-sm font-medium text-gray-600 dark:text-white">
      {time} | {meetingCode}
    </span>
  );
};