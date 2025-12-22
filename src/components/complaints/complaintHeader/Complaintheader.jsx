import { Funnel, Search } from 'lucide-react'

const Complaintheader = ({ search, setSearch }) => {
    return (
        <div className="flex transition-colors duration-500 flex-col md:flex-row px-6  items-center justify-between gap-4 mb-6">
            <h1 className=" text-2xl sm:text-3xl flex-5/9 font-semibold text-black dark:text-[#FFFFFF]">
                Complaints Management
            </h1>

            <div className="flex items-center justify-center sm:justify-end gap-3 flex-2/9   ">
                <button className="rounded-full flex items-center justify-center  border border-gray-300 dark:border-[#777575] px-4 py-2 text-sm text-black dark:text-[#8A8A8A] gap-3">
                    <Funnel className="size-4 " />
                    <span>Filter</span>
                </button>
                <div
                    className="flex w-3/5 sm:w-full items-center gap-x-2 
             bg-[#EDEDED] dark:bg-[#000000] 
             px-4 rounded-3xl h-10"
                >
                    <Search className="size-4 sm:size-5 text-[#777575] shrink-0" />

                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search"
                        className="flex-1 min-w-0 text-lg outline-none 
               text-gray-700 dark:text-[#8A8A8A] font-semibold
               dark:placeholder:text-[#8A8A8A]
               placeholder:text-sm placeholder:text-[#989696]"
                    />
                </div>

            </div>
        </div>
    )
}

export default Complaintheader