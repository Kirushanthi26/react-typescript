import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from "./components/Container";
import { Card } from "./components/Card";
import { IconButton } from "./components/IconButton";

function HeartIcon() {
  return <span>❤️</span>;
}

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

      <Card
        title="My Card"
        actions={
          <button onClick={() => console.log("Button clicked!")}>
            Click Me!
          </button>
        }
      >
        <p>Some content</p>
      </Card>

      <IconButton
        icon={HeartIcon}
        onClick={() => console.log("Button clicked!")}
      >
        Like
      </IconButton>
    </main>
  );
};
