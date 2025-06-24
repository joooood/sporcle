import { useState } from "preact/hooks";
import { createContext, type ComponentChildren } from "preact";
import { type __Tab__ } from "../types/tab";

type SearchContextType = {
  selected: __Tab__;
  setSelected: (tab: __Tab__) => void;
  tabs: __Tab__[];
};

export const SearchContext =     createContext<SearchContextType | undefined>(
  undefined
);

export function SearchProvider({ children }: { children: ComponentChildren }) {
  const [selected, setSelected] = useState<__Tab__>("");
}
