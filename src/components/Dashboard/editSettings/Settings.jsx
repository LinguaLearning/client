import React, { useState } from "react";
import { SettingTab, Account, LanguageTab } from "../../";

const Settings = () => {
  const [activeComponent, setActiveComponent] = useState("Account");

  const options = [
    {
      tabName: "Account",
      component: <Account />,
    },
    {
      tabName: "Settings",
      component: <SettingTab />,
    },
    {
      tabName: "Current Language",
      component: <LanguageTab />,
    },
  ];

  return (
    <>
      <h1 className="font-bold text-3xl">Settings</h1>
      <ul className="flex flex-row mt-7 border-b space-x-5 border-[rgba(170, 170, 170, 0.56)]">
        {options.map((tabs, idx) => {
          if (tabs.tabName === activeComponent) {
            return (
              <li
                className="text-blue-600 text-sm md:text-base border-b pb-1.5 border-b-blue-600"
                key={idx}
              >
                {tabs.tabName}
              </li>
            );
          } else {
            return (
              <li
                className="pb-1.5 text-sm md:text-base cursor-pointer"
                key={idx}
                onClick={() => setActiveComponent(tabs.tabName)}
              >
                {tabs.tabName}
              </li>
            );
          }
        })}
      </ul>
      {options.map(
        (tab, idx) =>
          tab.tabName === activeComponent && (
            <div key={idx}>{tab.component}</div>
          )
      )}
    </>
  );
};

export default Settings;
