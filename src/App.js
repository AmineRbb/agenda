import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

function App() {

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
