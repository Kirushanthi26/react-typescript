import { Header } from "./components/Header";
import GoalLogo from "./assets/goals.jpg";
import { useState } from "react";
import { Goal } from "./type";
import { CourseGoalList } from "./components/CourseGoalList";
import { NewGoalForm } from "./components/NewGoalForm";

export const App = () => {
  const [goals, setGoals] = useState<Goal[]>([]);

  const handleAddGoal = (title: string, description: string) => {
    setGoals((prevGoals) => {
      const newGoal: Goal = {
        id: Math.random(),
        title: title,
        description: description,
      };
      return [...prevGoals, newGoal];
    });
  };

  const handleDeleteGoal = (id: number) => {
    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <main className="w-[90%] max-w-[40rem] my-12 mx-auto p-8 bg-[#3a4346] text-[#f0f6f8] rounded-md shadow-lg">
      <Header image={{ src: GoalLogo, alt: "goals logo image" }}>
        <h1 className="text-3xl text-amber-200 m-0">Your Goals List</h1>
      </Header>

      <NewGoalForm onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
};
