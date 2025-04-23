import MultiSelect from "./components/multi-select";
import "./App.scss";

function App() {
  const options = [
    "Education 🎓",
    "Yeeeah, science! 📡",
    "Art 🎭",
    "Sport ⚽",
    "Games 🎮",
    "Health 🏥",
  ];
  return (
    <div className="select">
      <MultiSelect options={options} />
    </div>
  );
}

export default App;
