import logo from './logo.svg';
import './App.css';
import Todolist from './components/Todolist';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTask from './components/AddTask';
function App() {
  return (
    <div className="App">
      
      <AddTask/>
      <Todolist/>

    </div>
  );
}

export default App;
