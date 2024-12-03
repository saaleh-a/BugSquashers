import "./index.css";
import UserContainer from "./Containers/UserContainer";
import RewardContainer from "./Containers/RewardContainer";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Lloyds Rewards App</h1>
      </header>
      <main>
        <UserContainer />
        <RewardContainer />
      </main>
    </div>
  );
}

export default App;
