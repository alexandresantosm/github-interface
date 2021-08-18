import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export const WrapperRepositories = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  margin-top: 0.5rem;
`;

export const WrapperTabs = styled(Tabs)`
  font-size: 1rem;
  width: 100%;
  height: 100%;
`;

WrapperTabs.tabsRole = "Tabs";

export const WrapperTabList = styled(TabList)`
  flex: 1;
  padding-top: 0.5rem;
  padding-right: 0.5rem;
  display: flex;
  margin: 0;
`;

WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  border-radius: 0.25rem 0.25rem 0 0;
  border: 1px solid #ccc;
  padding: 0.5rem;
  user-select: none;
  cursor: pointer;
  color: #0080ff;
  margin-left: 0.5rem;
  margin-bottom: -1px;
  transition: all 0.5s;

  &.react-tabs__tab--selected {
    border-bottom: none;
  }

  &:not(:first-child) {
    margin-left: 0.5rem;
    color: #ffa500;

    &:hover,
    &.react-tabs__tab--selected {
      color: white;
      background-color: #ffa500;
    }
  }

  &:hover,
  &.react-tabs__tab--selected {
    color: white;
    background-color: #0080ff;
  }
`;

WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  width: 100%;
  height: 100%;
  padding: 1rem 0.5rem;
  border-top: 1px solid #ccc;
  display: none;

  &.react-tabs__tab-panel--selected {
    display: block;
  }
`;

WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
