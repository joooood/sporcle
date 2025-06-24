import { useSearch } from "@/hooks/useSearch";
import { QuizList } from "@/components/quizzes/QuizList";
import { SearchTabsMenu } from "@/components/tabs/SearchTabsMenu";

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
