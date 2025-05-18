import { useEffect } from "react";
import Demobanner from "./components/Demobanner";
import useStore from "./store/store";
import Control from "./views/Control";
import Home from "./views/Home";
import Meditions from "./views/Meditions";

function App() {
  const { view } = useStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

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
