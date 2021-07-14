import './App.css';
import MyConferences from './components/Myconf';
import Navbar from './components/Navbar';
import Shared from './components/Shared';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Navbar />
      </div>
      <div className="side">
        <Sidebar />
      </div>
      <div className="sec1">
      <MyConferences />
      </div>
      <div className="sec2">
        <Shared />
      </div>
    </div>
  );
}

export default App;
