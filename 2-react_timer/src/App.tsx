import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from "./components/Container";

export const App = () => {
  return (
    <main>
      <Input id="name" label="Your name" type="text" />
      <Input id="age" label="Your age" type="number" />

      <Button el="button">Click me</Button>
      <Button el="a" href="/">
        Click me
      </Button>

      <Container as="button" onClick={() => alert("Clicked!")}>
        Click me secound
      </Container>
    </main>
  );
};
