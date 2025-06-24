import type { __Quiz__ } from "@/types/quiz";
import { CategoryBadge } from "./category-badge";

function QuizCard({quiz}: {quiz: __Quiz__}) {
  return (
    <div className="quiz-card">
      <div className="top">
        <a className="title">{quiz.title}</a>
        <div className="meta">
          <div className="author">
            by 
            <a href={quiz.author.href} className="underlin">
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
