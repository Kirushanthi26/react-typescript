import { ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
  actions: ReactNode;
};

export function Card({ title, children, actions }: CardProps) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
      {actions}
    </section>
  );
}
