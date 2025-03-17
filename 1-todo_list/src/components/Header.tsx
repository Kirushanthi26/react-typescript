import { ReactNode } from "react";

type HeaderProps = {
  children: ReactNode;
  image: {
    src: string;
    alt: string;
  };
};

export const Header = ({ children, image }: HeaderProps) => {
  return (
    <header className="flex flex-col gap-6 justify-center items-center">
      <img {...image} className="w-20 h-20 rounded-full object-cover" />
      {children}
    </header>
  );
};
