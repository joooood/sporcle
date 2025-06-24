import { useContext } from "preact/hooks";
import { SearchContext } from "@/contexts/SearchContext";

export function useSearch() {
    const context = useContext(SearchContext);
    if(!context) throw new Error("useSearch must be used within a SearchProvider");
    return context;
}