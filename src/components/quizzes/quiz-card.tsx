import type { __Quiz__ } from "../../types/quiz";
import { CategoryBadge } from "./category-badge";

function QuizCard({quiz}: {quiz: __Quiz__}) {
  return (
    <div className="quiz-card flex flex-col gap-1">
      <div className="top flex gap-1">
        <a className="title">{quiz.title}</a>
        <div className="meta flex gap-1">
          <div className="author">
            by 
            <a href={quiz.author.href} className="underline">
              {quiz.author.name}
            </a>
          </div>
          <CategoryBadge category={quiz.category} />
        </div>
      </div>
      <p className="desc">{quiz.desc}</p>
    </div>
  );
}

export { QuizCard }
