import "./App.css";
import ThemeToggle from "./contexts/ThemeToggle";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeComponent from "./contexts/ThemedComponent";

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="App p-4">
          <h1 className="text-2xl font-bold mb-4">
            <ThemeComponent />
            <br></br>
            <ThemeToggle />
          </h1>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
