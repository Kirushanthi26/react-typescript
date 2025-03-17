import { type ReactNode } from "react";

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProps = {
  mode: "warning";
  serverity: "low" | "medium" | "high";
  children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

export const InfoBox = (props: InfoBoxProps) => {
  const { mode, children } = props;

  if (mode === "hint") {
    return (
      <aside className="my-8 p-2 text-center shadow-2xl font-semibold border rounded-2xl text-sky-400 border-sky-400">
        <p>{children}</p>
      </aside>
    );
  }

  const { serverity } = props;

  //dynamic Tailwind classes
  const severityClasses = {
    low: "text-yellow-500 border-yellow-500",
    medium: "text-orange-500 border-orange-500",
    high: "text-red-500 border-red-500",
  };

  return (
    <aside
      className={`my-8 p-2 text-center shadow-2xl font-semibold border rounded-2xl ${severityClasses[serverity]}`}
    >
      <h2 className="text-2xl">Warning</h2>
      <p>{children}</p>
    </aside>
  );
};
