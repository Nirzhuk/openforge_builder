import Editor from './containers/Editor'
import Menu from './containers/Menu'

const App = () => {
  return (
    <div className="font-mono h-full w-full relative grid auto-rows-min">
      <div className="bg-color  text-gray-300 h-10 p-2">Openforge Builder</div>
      <div className="grid container-app h-screen">
        <Menu />
        <Editor />
      </div>
    </div>
  )
}

export default App
