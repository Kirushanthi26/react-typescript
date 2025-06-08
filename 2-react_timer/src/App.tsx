import AddTimer from "./components/new/AddTimer";
import Header from "./components/new/Header";
import Timers from "./components/new/Timers";
import TimersContextProvider from "./store/timers-context";

function App() {
  return (
    <TimersContextProvider>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </TimersContextProvider>
  );
}

export default App;
