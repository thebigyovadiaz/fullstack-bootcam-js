import './App.css';

import Message from './Components/Message';
import Description from './Components/Description';

function App() {
  return (
    <div className="App">
      <Message msg="FullSatck Bootcamp"/>
      <Message msg= "Con MiDuDev como tutor" />
      <Description msg="Con el stack de Javascript" />
    </div>
  );
}

export default App;
