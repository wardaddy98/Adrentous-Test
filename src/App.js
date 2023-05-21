import ListWrapper from "./components/ListWrapper";
import store from "./redux/store";
import { Provider } from "react-redux";
import "antd/dist/reset.css";
import "./styles.css";

export default function App() {
  return (
    <Provider store={store}>
      <ListWrapper />;
    </Provider>
  );
}
