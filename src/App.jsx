import useStore from "./store/store";
import Alerts from "./views/Alerts";
import Control from "./views/Control";
import Home from "./views/Home";
import Meditions from "./views/Meditions";

function App() {
  const { view } = useStore();
  return (
    <>
      {view == 0 && <Home />}
      {view == 1 && <Control />}
      {view == 2 && <Meditions />}
      {view == 3 && <Alerts />}
    </>
  );
}

export default App;


