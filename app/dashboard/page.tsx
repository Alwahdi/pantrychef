"use client";
import Navbar from "@/components/Navbar";
import { useUser } from "@clerk/nextjs";
const Page = () => {
  const { user } = useUser();
  return (
    <div className="relative flex min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <Navbar />
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-5 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40">
          <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
            <h2 className="text-[#131612] tracking-light text-[22px] sm:text-[28px] font-bold leading-tight px-2 sm:px-4 text-left pb-3 pt-5">
              <div>
                Welcome back, {user?.firstName || user?.username || "User"}!
              </div>
            </h2>
            <div className="px-2 sm:px-4 py-3">
              <label className="flex flex-col min-w-0 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <div
                    className="text-[#6f816a] flex border-none bg-[#f2f4f1] items-center justify-center pl-4 rounded-l-xl border-r-0"
                    data-icon="MagnifyingGlass"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                    </svg>
                  </div>
                  <input
                    placeholder="Search for recipes or ingredients"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#131612] focus:outline-0 focus:ring-0 border-none bg-[#f2f4f1] focus:border-none h-full placeholder:text-[#6f816a] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                    value=""
                    readOnly
                  />
                </div>
              </label>
            </div>
            <h2 className="text-[#131612] text-[18px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-3 pt-5">
              Recipe Suggestions
            </h2>
            <div className="flex overflow-x-auto overflow-y-hidden [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch p-2 sm:p-4 gap-3">
                {/* Suggestion 1 */}
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-[220px] sm:min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBdnl24pyRDItpsuE8M3Ygc8O88p8piBzLNckD3ftomIB-huEZ1CWrg2NsQtCdTNpLfVuDfauIMDm6hXja7n2bWq5jmdLTou8Q4F2Z6DYpyz_z6qTtVlQ0A7Ul8AyZT5riFzkndJkKLaCKMj90ZnzO5Pni0QdXF05Fu3XqUWL22W5tSGvvHORoIyqj0puWTMaeinHaLG5AGmtG0bc1CjPlUS_0KSckzS7fNjEzNZPdda2Z9E2W_BtCL4izKBj1-2_j26nvYQPs_I04")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#131612] text-base font-medium leading-normal">
                      Creamy Tomato Pasta
                    </p>
                    <p className="text-[#6f816a] text-sm font-normal leading-normal">
                      Ready in 30 minutes
                    </p>
                  </div>
                </div>
                {/* Suggestion 2 */}
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-[220px] sm:min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBwLkG5jseoAPy9odTrcQBBK_0GCj-x_sTkjgjaU_aghmws2jMneI1muZOHgJUAKyb9G30e63CsyVOyVClXM1SxcmrDuvAGsFslLV6yMWE7KxoZMo6rPukR5iYkmgIDQsHQ5-3855s28cud2x4lp3az5mQWW6KJlBqtVqiRSpAcUJjPYtIBs1I8O0xbgGNxhzVor9hVt7HfMkrSDRdL_fTIlH6gRbXuqV4QhYXAPrY3J_w0Gsmh2Waou1ckjJJ8_GMkbMHlbGvUxw8")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#131612] text-base font-medium leading-normal">
                      Fresh Summer Salad
                    </p>
                    <p className="text-[#6f816a] text-sm font-normal leading-normal">
                      Light and refreshing
                    </p>
                  </div>
                </div>
                {/* Suggestion 3 */}
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-[220px] sm:min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC0T_1OuFBKrJZ6ctkrORlD5Y_XaiItRKf0KwyPCJz0n_EoIIC7L3qjH8YfwxUUVbOLsycAsw7mrTu48wNBfEBXw8w6SneOWRGAq_mncxexcuYthGotnU9BGQ9asFKAyQiK3Tp--uiAB53c1oL1K5gfWOHi-a6ws0cNUnoDUqSR9ru6bqMZnRLtn-oj0y_V-ePs751N5ORmKDdLCbInOI6m3U8TYocMik3ZbBhOSFkAOaBIJYFfyDm5gJd9AF0qrWIxRNcwpdeYsJI")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#131612] text-base font-medium leading-normal">
                      Hearty Vegetable Soup
                    </p>
                    <p className="text-[#6f816a] text-sm font-normal leading-normal">
                      Perfect for a chilly evening
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-[#131612] text-[18px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-3 pt-5">
              What Can I Cook?
            </h2>
            <div className="flex w-full max-w-full sm:max-w-[480px] flex-wrap items-end gap-4 px-2 sm:px-4 py-3">
              <label className="flex flex-col min-w-0 flex-1">
                <input
                  placeholder="Enter your ingredients"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#131612] focus:outline-0 focus:ring-0 border border-[#dfe3dd] bg-white focus:border-[#dfe3dd] h-14 placeholder:text-[#6f816a] p-[15px] text-base font-normal leading-normal"
                  value=""
                  readOnly
                />
              </label>
            </div>
            <div className="flex px-2 sm:px-4 py-3 justify-start">
              <button className="flex min-w-[84px] w-full sm:w-auto max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#8cd279] text-[#131612] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Find Recipes</span>
              </button>
            </div>
            <h2 className="text-[#131612] text-[18px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-3 pt-5">
              Explore More
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 p-2 sm:p-4">
              {/* Explore Cards */}
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCzamqU0sWCw5xdS512XRXkWkdmLzI4Ur_ZfRh3Y3cZKD357_WYLkTQbXR0Gp7Q0EjGM3W86rto5ZJ9q6GWAUsQcik08x--G7YYe5OYf4dYS7ZPAYOUWlGJpIICkt_xjDzdr8OuXd6QiYOen0Gj6Mr1L4N-PXBGguG3zbnIGi9u_O4tgp3VEbq5Qf2h-r67fd3Wq2OzgKmY0nuyj2Qnv03qTg4-zJGv8T9-fq7nam-lq9rfRMVmE6SFenJPmrQHASnJlht1dFGXYp0")',
                  }}
                ></div>
                <p className="text-[#131612] text-base font-medium leading-normal">
                  Digital Pantry
                </p>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBb3PfjxE5ms5l967mxKXjIB8HibsqjcSJj_D9Z1S23Kx7cmrdPWzBnJdE2ij9zeKuIbAfXZEzlGGQGzico9cARrWqnZmGaZJatsyOcaUQL320QZHAaYTILnvJsU6B57cflhYPrB3DJbnddITJ2S2yOqzdXOvgXLyUL-rTyeEWfSc3XOqlYIUfshl84jzvKWEJO6rzP4TYkclO534xHKdSLT17LDyD9ZWyni9gjQHJ4OrB1QCNZIVGjmpfLgBNwZ286D0MduBLxzkQ")',
                  }}
                ></div>
                <p className="text-[#131612] text-base font-medium leading-normal">
                  Meal Planner
                </p>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuByIp_OcGgzfDRzmjfC8BFNtfE-xwIVjSB3kKSgFCCOg075hJc8ArezsBXbk9KgoC4JV3-aVff9jLzQR45lPG-IE5vB3BflBACid4ij3nq392-_d3mMNGQf0e6iKolxRhR4lCUyXjqZ8yK6JL2Lg7tfCQ16VKDVzwtHTY6VARb4-dCm48vHYkaiPc9MyBv1HEWk4wf56IgIgBosp-EsnNYtfkm0U9GwJNE2kMbwczuV6yeZKJ6nyGP5Mpc_mwiwW9n9pdLZWVrDCo4")',
                  }}
                ></div>
                <p className="text-[#131612] text-base font-medium leading-normal">
                  Saved Recipes
                </p>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBSBv5oy86KRdhyRknjdEl82ryTr-FvAoo25gQBfPL-qaOp-0wrJL1cefAnPECPWN8u4iOOUQ1XMqboIPOnQ72VYq8taoYPJftOld96S1QhAGePYB-zYki_Fw30AZDHbRUgr9IWa1AUPXywaL5t_CzYHF6gdyVxGtEwaYUiXFk8-y_66JnPkGAekJnzOBvTK7beegtE26PYT3iMRFJQxGMFHhzkPYW3kP4S3SPzy3dOrbSiqv1UFjxogPmIyx2fsPZAaZ3WSh5NvIs")',
                  }}
                ></div>
                <p className="text-[#131612] text-base font-medium leading-normal">
                  Community Feed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
