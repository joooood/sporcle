import { useState } from "preact/hooks";
import { createContext, type ComponentChildren } from "preact";
import { type __Tab__ } from "../types/tab";

type SearchContextType = {
  selected: __Tab__;
  setSelected: (tab: __Tab__) => void;
  tabs: __Tab__[];
};

const defaults: __Tab__[] = [
  { name: "Quizzes", href: "/search/quizzes/?s=" },
  { name: "Badges", href: "/search/badges/?s=" },
  { name: "Playlists", href: "/search/playlists/?s=" },
];

export const SearchContext = createContext<SearchContextType | undefined>(
  undefined
);

export function SearchProvider({ children }: { children: ComponentChildren }) {
  const [selected, setSelected] = useState<__Tab__>(defaults[0]);

  return (
    <SearchContext.Provider value={{ selected, setSelected, tabs: defaults}}>
      {children}
    </SearchContext.Provider>
  )
}
