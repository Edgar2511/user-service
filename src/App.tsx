import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Offer } from "./Components/Main/Offer/Offer";
import { Title } from "./Components/Main/Title/Title";
import { Main } from "./Components/Main/Main";
import { Footer } from "./Components/Footer/Footer";
import { Registration } from "./Components/Registration/Registration";
import { PhoneModel } from "./Components/PhoenModel/PhoneModel";
import { GetInputValue } from "./Components/GetInputValue/GetInputValue";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Main /> */}
      {/* <Footer /> */}
      {/* <Registration /> */}
      {/* <PhoneModel /> */}
      <GetInputValue />
    </div>
  );
}

export default App;
