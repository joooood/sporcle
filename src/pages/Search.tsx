import { SearchProvider } from "@/contexts/SearchContext";
import { SearchTabs } from "@/components/tabs/SearchTabs";

export function Search() {
  return (
    <SearchProvider>
      <SearchTabs />
    </SearchProvider>
  );
}
