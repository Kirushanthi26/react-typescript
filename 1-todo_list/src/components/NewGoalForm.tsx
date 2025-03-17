type NewGoalFormProps = {
  onAddGoal: (title: string, description: string) => void;
};

export const NewGoalForm = ({ onAddGoal }: NewGoalFormProps) => {
  const handleCreateNewGoal = () => {
    onAddGoal("test the title by kiru ", "test the description by kiru ");
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleCreateNewGoal}>
      <input
        type="text"
        placeholder="Title"
        className="text-inherit w-full p-2 bg-[#b4b6c4] border-none rounded-sm shadow-lg placeholder:text-[#dfd9be] placeholder:font-semibold placeholder:uppercase"
      />
      <textarea
        placeholder="Description"
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
