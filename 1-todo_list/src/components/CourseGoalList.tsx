import { Goal } from "../type";
import { CourseGoal } from "./CourseGoal";

type CourseGoalListProps = {
  goals: Goal[];
  onDeleteGoal: (id: number) => void;
};

export const CourseGoalList = ({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) => {
  return (
    <ul className="m-0 p-0 grid gap-4 grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
      {goals.map((goal) => (
        <li key={goal.id} className="bg-[#475357] p-4 rounded-sm shadow-lg">
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p className="m-0 text-xs font-normal text-[#dfd9be]">
              {goal.description}
            </p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};
