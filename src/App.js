
import './App.css';
import Navbar from '../src/component/Navbar'
import  Menu from '../src/component/Section'
import Photo from '../src/component/Photo'
function App() {
  return (
   <>
      <Navbar/>
      <div className="blank"></div>
      <div className="subheader">
      <Menu/>
      <Photo/>
      </div>
  </>
  );
}

export default App;
