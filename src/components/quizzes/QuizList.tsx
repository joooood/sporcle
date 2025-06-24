import { useEffect, useState } from "preact/hooks";
import type { __Quiz__ } from "@/types/quiz";
import { QuizCard } from "@/components/quizzes/QuizCard";

function QuizList() {
  const [quizzes, setQuizzes] = useState<__Quiz__[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchQuizzes() {
      setLoading(true);
      try {
        const res = await fetch("/search/quizzes/?s=");
        const html = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        const raws = [...doc.querySelectorAll("#searchResults li")];
        const data: __Quiz__[] = raws.map((raw) => {
          const author = raw.querySelector(".gameCreator a:nth-child(1)");
          return {
            title:
              raw.querySelector(".gameName")?.textContent?.trim() || "Untitled",
            desc:
              raw.querySelector(".gameDesc")?.textContent?.trim() ||
              "No description",
            href: raw.querySelector(".gameName")?.getAttribute("href") || "#",
            category:
              raw
                .querySelector(".gameCreator a:nth-child(2)")
                ?.textContent?.trim() || "Misc",
            author: {
              name: author?.textContent?.trim() || "Unknown",
              href: author?.getAttribute("href") || "#",
            },
          };
        });
        setQuizzes(data);
      } catch (err) {
        console.error("Failed to fetch quizzes");
      } finally {
        setLoading(false);
      }
    }

    fetchQuizzes();
  }, []);

  if (loading) return <div>Loading quizzes...</div>;

  return (
    <ul class="quiz-list">
      {quizzes.map((quiz) => (
        <li>
          <QuizCard quiz={quiz} />
        </li>
      ))}
    </ul>
  );
}

export { QuizList };
