import useStore from "./store/store";
import Control from "./views/Control";
import Home from "./views/Home";

function App() {
  const { view } = useStore();
  return (
    <>
      {view == 0 && <Home />}
      {view == 1 && <Control />}
    </>
  );
}

export default App;
