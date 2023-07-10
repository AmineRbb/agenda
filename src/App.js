import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/header";

function App() {

  return (
    <BrowserRouter>
      <div>
        <Header />
        
      </div>
    </BrowserRouter>
  );
}
/// {withAuthorization(['admin'])(ParametrerAdmin)} />
export default App;
