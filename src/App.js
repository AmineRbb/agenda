import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

function App() {

  return (
    <BrowserRouter>
    <div class="root-container">
      <div class="container">
        <Header />
        <Body />
      </div>
      <Footer />
    </div>
    </BrowserRouter>
  );
}
export default App;
