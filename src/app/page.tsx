import { SearchTabs } from "../components/tabs/SearchTabs";
import { SearchProvider } from "../contexts/SearchContext";

export function Home() {
  return (
    <SearchProvider>
      <SearchTabs />
    </SearchProvider>
  );
}
