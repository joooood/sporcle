import { Router } from "preact-router";

import { Search, HomePage } from "@/pages";

export function App() {
  return (
    <Router>
      <HomePage />
      <Search />
    </Router>
  );
}
