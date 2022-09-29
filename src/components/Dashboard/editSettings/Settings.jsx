import React, { useState } from "react";
import { Title, SettingMenuList, List, ListActive } from "./SettingsStyled";
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
      <Title>Settings</Title>
      <SettingMenuList>
        {options.map((tabs, idx) => {
          if (tabs.tabName === activeComponent) {
            return <ListActive key={idx}>{tabs.tabName}</ListActive>;
          } else {
            return (
              <List key={idx} onClick={() => setActiveComponent(tabs.tabName)}>
                {tabs.tabName}
              </List>
            );
          }
        })}
      </SettingMenuList>
      {options.map((tab, idx) => {
        if (tab.tabName === activeComponent) {
          return <div key={idx}>{tab.component}</div>;
        }
        return <></>;
      })}
    </>
  );
};

export default Settings;
