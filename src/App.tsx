import ErrorBoundary from "./components/ErrorBoundary";
import Editor from "./containers/Editor";
import Sidemenu from "./containers/Sidemenu";
import { useStore } from "./store";

const App = () => {
  const {
    transformControlProps: { mode },
  } = useStore();

  return (
    <div className="font-mono h-full w-full relative grid auto-rows-min">
      <div className="bg-color text-gray-300 h-14 p-2">
        <div className="col-span-3 text-center w-full">Openforge Builder</div>
        <div></div>
      </div>
      <div className="bg-color border-t border-b border-1 border-gray-400 text-gray-300 h-10 p-2 flex justify-center">
        <div className="col-span-3">
          <div className="flex justify-center w-96 items-center text-white ">
            Mode: {mode}
          </div>
        </div>
      </div>
      <div className="grid container-app h-screen">
        <Sidemenu />
        <ErrorBoundary>
          <Editor />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default App;
