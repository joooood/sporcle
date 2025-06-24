import type { __TabsButtonProps__ } from "../../types/tab";

function TabsButton({ tab, selected, onSelect }: __TabsButtonProps__) {
  return (
    <button
      className={`tabs-button ${selected ? "selected" : ""}`}
      onClick={onSelect}
    >
      {tab.name}
    </button>
  );
}

export { TabsButton };
