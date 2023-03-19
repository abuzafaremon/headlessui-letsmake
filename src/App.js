import "./App.css";
import MyDropdown from "./components/MyDropdown";
import MyListBox from "./components/MyListBox";
import MyComboBox from "./components/MyComboBox";
import MyToggle from "./components/MyToggle";
import MyFAQ from "./components/MyFAQ";
import MyPOpover from "./components/MyPopover";
import MyRadioGroup from "./components/MyRadioGroup";
import MyTabs from "./components/MyTabs";

function App() {
  return (
    <div className="bg-slate-800 min-h-screen">
      <h2 className="text-xl text-center text-white">MyDropdown</h2>
      <MyDropdown />
      <h2 className="text-xl text-center text-white">MyListBox</h2>
      <MyListBox />
      <h2 className="text-xl text-center text-white">MyComboBox</h2>
      <MyComboBox />
      <h2 className="text-xl text-center text-white">MyToggle</h2>
      <MyToggle />
      <h2 className="text-xl text-center text-white">MyFAQ</h2>
      <MyFAQ />
      <h2 className="text-xl text-center text-white">MyPOpover</h2>
      <MyPOpover />
      <h2 className="text-xl text-center text-white">MyRadioGroup</h2>
      <MyRadioGroup />
      <h2 className="text-xl text-center text-white">MyTabs</h2>
      <MyTabs></MyTabs>
    </div>
  );
}

export default App;
