import { ReactNode } from "react";

type CourseGoalProps = {
  title: string;
  children: ReactNode;
  onDelete: (id: number) => void;
  id: number;
};

export const CourseGoal = ({
  id,
  title,
  children,
  onDelete,
}: CourseGoalProps) => {
  return (
    <article className="flex justify-between items-start">
      <div>
        <h2 className="m-0 text-xl text-[#b1c1c3]">{title}</h2>
        {children}
      </div>
      <button
        onClick={() => onDelete(id)}
        className="font-inherit px-2 bg-transparent border-none text-[#909a9a] cursor-pointer hover:text-[#f9a73b]"
      >
        Delete
      </button>
    </article>
  );
};
