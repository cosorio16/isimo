import Demobanner from "./components/Demobanner";
import useStore from "./store/store";
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
      <Demobanner />
    </>
  );
}

export default App;
