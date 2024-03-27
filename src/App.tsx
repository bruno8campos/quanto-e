import { useState } from "react";
/* import Navbar from "./scenes/navbar"; */
import { SelectedPage } from "./shared/types";
import Home from "./scenes/home";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );
  return (
    <div className="app bg-gray-50">
      {/*       <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} /> */}
      <Home setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
