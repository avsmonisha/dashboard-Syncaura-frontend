import { ChevronDown, Ellipsis, Flag, ListFilter, Plus } from "lucide-react";
import { useState } from "react";
import Tab from "../components/projects/Tab";
import ProjectCard from "../components/projects/ProjectCard";
import { PROJECTS } from "../constant/constant";
import CreateNewProject from "../components/projects/Model/CreateNewProject";

const Projects = () => {
  const [currTab, setCurrTab] = useState("All Projects");
  const [selectedPriorityTab, setSelectedPriorityTab] = useState("High");
  const [showModel, setShowModel] = useState(false);
  const tabData = [
    { title: "All Projects", count: PROJECTS.length },
    { title: "Ongoing", count: PROJECTS.filter((item) => item.priority === "Ongoing").length },
    { title: "Completed", count: PROJECTS.filter((item) => item.priority === "Completed").length },
    { title: "On Hold", count: PROJECTS.filter((item) => item.priority === "On Hold").length },
  ];
  const priorityTab = ["Low", "Medium", "High", "Critical"];
  const filteredProjects =
    currTab === "All Projects"
      ? PROJECTS
      : PROJECTS.filter((item) => item.priority === currTab);


  return (
    <div className="w-full  py-5 flex flex-col bg-[#FFFFFF] dark:bg-[#000000] mt-2 dark:mt-1 h-full ">
      <div className="px-2 xl:px-6">
        <div className="flex items-center  justify-between px-5 py-2 ">
          <h1 className="font-bold text-3xl text-[#000000] dark:text-[#F8F8F8]">
            Projects
          </h1>
          <div onClick={() => setShowModel(true)} className="px-4 cursor-pointer py-2.5 bg-[#2457C5] dark:bg-[#73FBFD] rounded-3xl flex items-center justify-center gap-2 ">
            <Plus className="text-xl text-[#FFFFFF] dark:text-[#000000] " />
            <h2 className="text-[#FFFFFF] dark:text-[#000000] text-base font-semibold">
              New Project
            </h2>
          </div>
        </div>
        <div className="flex  flex-col gap-4 px-4 py-3 w-full 
                md:flex-row md:items-center md:justify-between">

          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-2 justify-center 
                  md:justify-start">
            {tabData.map(({ title, count }, idx) => (
              <Tab
                key={idx}
                name={title}
                count={count}
                curr={currTab}
                setCurr={setCurrTab}
              />
            ))}
          </div>

          {/* Sort & Filter */}
          <div className="flex flex-wrap items-center gap-3 justify-center 
                  md:justify-end">

            {/* Sort */}
            <div className="px-3 py-2 bg-white dark:bg-[#575757]
                    flex items-center gap-2
                    border rounded-xl
                    border-[#EAECEF] dark:border-[#575757]">
              <h1 className="text-sm text-[#082A44] dark:text-[#B2B2B2] font-semibold">
                Sort by: Recent
              </h1>
              <ChevronDown className="size-5 text-[#082A44] dark:text-[#B2B2B2]" />
            </div>

            {/* Filter */}
            <div className="px-4 py-2 bg-white dark:bg-[#575757]
                    flex items-center gap-2
                    border rounded-xl
                    border-[#EAECEF] dark:border-[#575757]">
              <ListFilter className="size-5 text-[#082A44] dark:text-[#B2B2B2]" />
              <h1 className="text-sm text-[#082A44] dark:text-[#B2B2B2] font-semibold">
                Filter
              </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center px-5 justify-center gap-5 mt-5 py-4 rounded-xl  w-full border shadow-[0_0_10px_1px_rgba(0,0,0,0.25)]  border-[#E0DDDD] dark:bg-[#2E2F2F]  ">
          <div className=" flex-1/2 flex flex-col sm:flex-row items-center justify-center gap-5 w-full ">
            <div className="flex-3/8 w-full  flex flex-col gap-2 items-start justify-center ">
              <h1 className="text-sm font-semibold text-[#000000] dark:text-[#F8F8F8] uppercase">
                date range
              </h1>
              <div className="px-3 w-full py-2 bg-[#F9FAFB] dark:bg-[#000000] border border-[#EAECEF] dark:border-[#575757] rounded-2xl ">
                <input
                  type="date"
                  className="date-input w-full pr-3 text-[#000000] dark:text-[#A2A2A2] bg-transparent outline-none border-none "
                />
              </div>
            </div>
            <div className="flex-5/8  w-full flex flex-col gap-2 items-start justify-center ">
              <h1 className="text-sm font-semibold text-[#000000] dark:text-[#F8F8F8] uppercase">
                team/member
              </h1>
              <div className="px-3 w-full py-2 flex items-center justify-between pr-5 bg-[#F9FAFB] dark:bg-[#000000] border dark:border-[#575757] border-[#EAECEF] rounded-2xl ">
                <h1 className="text-[#000000] font-light text-sm dark:text-[#A2A2A2]">All Members</h1>
                <ChevronDown className="size-5 text-[#082A44] dark:text-[#A2A2A2]" />
              </div>
            </div>
          </div>

          <div className="flex-1/2 flex flex-col md:flex-row items-center justify-center w-full">
            <div className="flex-4/17 w-full flex flex-col gap-2 items-start justify-center ">
              <h1 className="text-sm font-semibold  text-[#000000] dark:text-[#F8F8F8] uppercase w-full ">
                priority
              </h1>
              <div className="flex items-center justify-center gap-x-4 gap-y-2  flex-wrap w-full ">
                {priorityTab.map((item, idx) => (
                  <div
                    onClick={() => setSelectedPriorityTab(item)}
                    key={idx}
                    className={`flex  items-center justify-center px-5 py-3 font-semibold rounded-3xl border ${selectedPriorityTab === item
                      ? "border-[#2457C5] bg-[#E2EBFF] dark:bg-[#002B2C] dark:border-[#73FBFD]  "
                      : "border-[#E1E4E8] dark:border-[#000000] bg-[#FFFFFF] dark:bg-[#000000] cursor-pointer "
                      }`}
                  >
                    <p
                      className={`text-xs ${selectedPriorityTab === item
                        ? "text-[#2457C5] dark:text-[#73FBFD]"
                        : "text-[#002341] dark:text-[#A2A2A2]"
                        } font-semibold`}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-5/17  flex  items-center mt-3 md:mt-5 justify-center  md:justify-end w-full gap-4">
              <div className="px-6 py-3 flex items-center bg-[#D9D9D9] dark:bg-[#000000] rounded-4xl justify-center ">
                <p className="text-sm font-semibold text-[#010101] dark:text-[#F8F8F8] ">Reset</p>
              </div>
              <div className="px-10 py-2 flex items-center bg-[#2461E6] dark:bg-[#73FBFD] rounded-4xl justify-center ">
                <p className="text-xs font-bold text-[#FFFFFF] dark:text-[#2E2F2F]">
                  Apply Filters
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFFFF] dark:bg-[#000000]  mt-5" >
        <div className="px-5 py-3  flex flex-wrap  items-center justify-center gap-x-14 gap-y-8 ">
          {filteredProjects.map(({ title, department, priority, progress, dueDate, avatars }, idx) => (
            <ProjectCard key={idx} title={title} department={department} priority={priority} progress={progress} dueDate={dueDate} avatars={avatars} />
          ))}
        </div>
      </div>
      {showModel && <CreateNewProject onClose={() => setShowModel(false)} />}
    </div>
  );
};

export default Projects;
