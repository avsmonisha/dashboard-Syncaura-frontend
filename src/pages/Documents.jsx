import { Download, FileText, Plus } from "lucide-react";
import { useState } from "react";
import SortAndFilterBar from "../components/Document/SortAndFilterBar";
import FileRow from "../components/Document/FileRow";
import { reportsList } from "../constant/constant";
import TableRow from "../components/Document/TableRow";
import DocumentModal from "../components/Document/DocumentModel";
import VersionHistoryDrawer from "../components/Document/DetailAboutDcument/VersionHistoryDrawer";

export default function Documents() {
  const tab = ["All Files", "Recent", "Shared with me", "Achived"];
  const [selectedTab, setSelectedTab] = useState("All Files");
  const [selected, setSelected] = useState("Recent");
  const [showModal, setShowModal] = useState(false);
  const [currId, setCurrId] = useState(null);
  const [selectedReportList, setSelectedReportList] = useState(
    reportsList.slice(0, 8)
  );

  const sortOptions = ["Recent", "Oldest", "A–Z", "Z–A"];
  return (
    <div className="relative w-full transition-colors duration-500  border-t dark:border-[#000000] h-full bg-[#FFFFFF] dark:bg-black pt-6 pb-24 overflow-y-auto  ">
      <div className="flex items-center justify-between w-full px-2 sm:px-7 ">
        <div className="flex items-center justify-start  ">
          <h1 className="text-[#000000] text-xl lg:text-2xl font-semibold dark:text-[#FFFFFF]">
            Documents and Report
          </h1>
        </div>
        <div className="flex items-center justify-end  ">
          <div className="flex items-center justify-center rounded-4xl border gap-2 border-[#2461E6] dark:border-[#73FBFD] px-3 sm:px-5 py-1 sm:py-2 ">
            <Download className="text-[#2457C5] dark:text-[#73FBFD] size-4 sm:size-5" />
            <p className="text-xs sm:text-base font-bold text-[#2457C5] dark:text-[#73FBFD] ">
              Export All
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center xl:justify-between  flex-wrap w-full mt-4 gap-y-3 ">
        <div className="flex items-center justify-center md:justify-start flex-wrap md:flex-nowrap gap-5 px-2 sm:px-7  ">
          {tab.map((item) => (
            <button
              onClick={() => setSelectedTab(item)}
              key={item}
              className={`flex items-center border justify-center py-2 w-32 ${
                selectedTab === item
                  ? "bg-[#EFF6FF] dark:bg-[#344343] border-[#DBEAFE] dark:border-[#73FBFD] text-[#1D6BE3] dark:text-[#73FBFD]"
                  : "border-[#EAECEF] text-[#989696] cursor-pointer"
              } rounded-xl`}
            >
              <h1 className=" text-sm font-semibold">{item}</h1>
            </button>
          ))}
        </div>
        <div className="flex items-center justify-center md:justify-end flex-wrap md:flex-nowrap gap-5 px-2 sm:px-7 w-full sm:w-auto ">
          <SortAndFilterBar
            sortOptions={sortOptions}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
        <div className="flex flex-col items-center justify-center w-[99.5%] gap-4  mt-5">
          <div className="hidden md:flex  items-center justify-center w-full border px-10 py-3 border-gray-200 dark:border-gray-700 ">
            <div className="flex-4/13 w-full flex items-center justify-start ">
              <h1 className="text-lg text-[#000000] dark:text-[#FFFFFF] font-semibold ">
                Name
              </h1>
            </div>
            <div className="flex-2/13 w-full flex items-center justify-start ">
              <h1 className="text-lg text-[#000000] dark:text-[#FFFFFF] font-semibold ">
                Type
              </h1>
            </div>
            <div className="flex-2/13 w-full flex items-center justify-start ">
              <h1 className="text-lg text-[#000000] dark:text-[#FFFFFF] font-semibold ">
                Version
              </h1>
            </div>
            <div className="flex-2/13 w-full flex items-center justify-start ">
              <h1 className="text-lg text-[#000000] dark:text-[#FFFFFF] font-semibold ">
                Last Modified
              </h1>
            </div>
            <div className="flex-2/13 w-full flex items-center justify-center ">
              <h1 className="text-lg text-[#000000] dark:text-[#FFFFFF] font-semibold ">
                Status
              </h1>
            </div>
            <div className="flex-1/13 w-full flex items-center justify-start " />
          </div>
          <div className="flex flex-col items-center justify-center w-full gap-3 ">
            {selectedReportList.map((item, idx) => (
              <div
                onClick={() => setCurrId(item.id)}
                key={item.id}
                className={`flex  relative transition-all duration-300 items-center justify-between w-full bg-[#FFFFFF] dark:bg-[#000000]   py-6 ${
                  currId === item.id
                    ? "bg-blue-50 dark:bg-[#1C3939]"
                    : "hover:bg-[#d1d4db75] dark:hover:bg-gray-800 hover:scale-[1.01] cursor-pointer"
                }`}
              >
                <span
                  className={`absolute  left-0 top-0 h-full w-1 bg-blue-500 dark:bg-gray-400 transition-transform duration-300
                  ${
                    currId === item.id
                      ? "scale-y-100"
                      : "scale-y-0 group-hover:scale-y-100"
                  }`}
                />
                <TableRow
                  name={item.name}
                  type={item.type}
                  date={item.lastModified}
                  status={item.status}
                  version={item.version}
                  docColor={
                    idx % 3 === 0
                      ? "text-[#DC2626]"
                      : idx % 3 === 1
                      ? "text-[#9333EA]"
                      : "text-[#2563EB]"
                  }
                />
              </div>
            ))}
            {selectedReportList.length !== reportsList.length && (
              <div className="w-full flex items-center justify-center mt-4">
                <button
                  onClick={() => {
                    setSelectedReportList((prev) => [
                      ...prev,
                      ...reportsList.slice(
                        selectedReportList.length,
                        selectedReportList.length + 8
                      ),
                    ]);
                  }}
                  className="flex items-center justify-center text-[#C05328] text-xl hover:underline"
                >
                  View All Reports and Document
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-8 right-8 flex items-center gap-2
                   rounded-full bg-blue-600 dark:bg-[#73FBFD] dark:text-black transition duration-500 px-6 py-3
                   text-white shadow-lg hover:bg-blue-400 dark:hover:bg-[#2cc4c7]"
      >
        <Plus size={18} />
        New Report
      </button>
      {showModal && (
        <DocumentModal
          addReport={setSelectedReportList}
          onClose={() => setShowModal(false)}
        />
      )}
      {currId && <VersionHistoryDrawer open={currId!==null ? true: false} onClose={()=>setCurrId(null)} />}
    </div>
  );
}
