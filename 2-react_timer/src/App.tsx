import AddTimer from "./components/new/AddTimer";
import Header from "./components/new/Header";
import Timers from "./components/new/Timers";

function App() {
  return (
    <>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </>
  );
}

export default App;
