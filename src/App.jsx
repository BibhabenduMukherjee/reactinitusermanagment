
import Main from './components/Main'
import { data } from "../data.js"
import Nav from './components/Nav'
function App() {
return (
    <div className="flex flex-col">
      <Nav />
      <Main data={data} />
    </div>

  )
}
export default App
