import { createContext, ReactNode } from "react";

type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimer: () => void;
  stopTimer: () => void;
};

const TimersContext = createContext<TimersContextValue | null>(null);

type TimersContextProviderProps = {
  children: ReactNode;
};

export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
  const ctx: TimersContextValue = {
    isRunning: false,
    timers: [],
    addTimer: (timerData) => {
      console.log("Adding timer:", timerData);
    },
    startTimer: () => {
      console.log("Starting timer");
    },
    stopTimer: () => {
      console.log("Stopping timer");
    },
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}
