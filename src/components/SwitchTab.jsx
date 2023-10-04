import { useState } from "react";
/* eslint-disable react/prop-types */

function SwitchTab({ data, onTabChange }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const activeTab = (tab, index) => {
    setSelectedTab(index);
    onTabChange(tab, index);
    // onTabChange(selectedTab)
  };

  return (
    <>
      <div className="flex h-[35px] items-center justify-center p-1 bg-white rounded-full border border-sky-500 mr-2">
        {data.map((tab, index) => {
          return (
            <button
              key={index}
              className={`px-2 rounded-full font-semibold  text-lg mx-0.5 ${
                selectedTab == index
                  ? " bg-[#0072B1] text-white"
                  : " bg-white text-[#1b2330]"
              } transform duration-500`}
              onClick={() => activeTab(tab, index)}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default SwitchTab;
