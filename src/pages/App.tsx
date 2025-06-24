import { Router } from "preact-router";

import { SiteHeader } from "@/components/SiteHeader";
import { Search, HomePage } from "@/pages";

export function App() {
  return (
    <>
      <SiteHeader />
      <Router>
        <HomePage />
        <Search />
      </Router>
    </>
  );
}
