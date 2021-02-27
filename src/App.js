import "./App.css";
import RecipePage from "./components/Recipe/RecipePage";
import User from "./components/User/User";

function App() {
  return (
    <div className="App">
      <User user={defaultUser} />
    </div>
  );
}

export default App;
