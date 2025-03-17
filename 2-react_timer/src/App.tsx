import { Input } from "./components/Input";

export const App = () => {
  return (
    <main>
      <Input id="name" label="Your name" type="text" />
      <Input id="age" label="Your age" type="number" />
    </main>
  );
};
