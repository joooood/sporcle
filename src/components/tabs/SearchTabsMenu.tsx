import { useSearch } from "../../hooks/useSearch";
import type { __Tab__ } from "../../types/tab";
import { TabsButton } from "./tabs-button";

function SearchTabsMenu() {
  const { selected, setSelected, tabs } = useSearch();

  return (
    <div className="tabs-menu">
      <ul className="tabs-menu-list">
        {tabs.map((tab) => (
          <li className="tabs-menu-list-item" key={tab.href}>
            <TabsButton
              tab={tab}
              selected={selected.href === tab.href}
              onSelect={() => setSelected(tab)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export { SearchTabsMenu };
