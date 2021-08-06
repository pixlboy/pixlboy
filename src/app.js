import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/home";
import CoverPage from "./pages/cover";

export default function App() {
  return (
    <Switch>
      <Route path="/cover" component={CoverPage}></Route>
      <Route path="/" component={HomePage}></Route>
    </Switch>
  );
}
