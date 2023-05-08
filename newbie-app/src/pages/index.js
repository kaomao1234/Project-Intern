
import Counter from "./counter/counter";
import { Provider } from "react-redux";
const App = () => {
  return (
    <Provider>
      <Counter></Counter>
    </Provider>
  );
};
export default App;
