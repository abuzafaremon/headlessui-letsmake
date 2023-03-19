import "./App.css";
import MyDropdown from "./components/MyDropdown";
import MyListBox from "./components/MyListBox";
import MyComboBox from "./components/MyComboBox";
import MyToggle from "./components/MyToggle";
import MyFAQ from "./components/MyFAQ";
import MyPOpover from "./components/MyPopover";

function App() {
  return (
    <div className="bg-slate-800 min-h-screen">
      <MyDropdown />
      <MyListBox />
      <MyComboBox />
      <MyToggle />
      <MyFAQ />
      <MyPOpover />
    </div>
  );
}

export default App;
