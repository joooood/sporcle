import { useSearch } from "../../hooks/useSearch";
import { QuizList } from "../quizzes/quiz-list";
import { SearchTabsMenu } from "./SearchTabsMenu";

function SearchTabs() {
  const { selected } = useSearch();

  return (
    <>
      <SearchTabsMenu />
      {selected.name === "Quizzes" && <QuizList />}
    </>
  );
}

export { SearchTabs };
