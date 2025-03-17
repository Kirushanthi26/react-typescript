import { useRef, type FormEvent } from "react";

type NewGoalFormProps = {
  onAddGoal: (title: string, description: string) => void;
};

export const NewGoalForm = ({ onAddGoal }: NewGoalFormProps) => {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLTextAreaElement>(null);

  const handleCreateNewGoal = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!goal.current?.value || !summary.current?.value) return;

    const title = goal.current.value;
    const description = summary.current.value;

    onAddGoal(title, description);

    goal.current!.value = "";
    summary.current!.value = "";
    //e.currentTarget.reset(); altranative to reset the form
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleCreateNewGoal}>
      <input
        type="text"
        placeholder="Title"
        ref={goal}
        className="text-inherit w-full p-2 bg-[#b4b6c4] border-none rounded-sm shadow-lg placeholder:text-[#dfd9be] placeholder:font-semibold placeholder:uppercase"
      />
      <textarea
        placeholder="Description"
        ref={summary}
        className="text-inherit w-full p-2 bg-[#b4b6c4] border-none rounded-sm shadow-lg placeholder:text-[#dfd9be] placeholder:font-semibold placeholder:uppercase"
      ></textarea>
      <button
        type="submit"
        className="bg-[#f7e596] text-[#3a4346] rounded-sm shadow-lg cursor-pointer border-0 font-semibold w-full my-4 p-3 hover:bg-[#f9e175]"
      >
        Add Goal
      </button>
    </form>
  );
};
