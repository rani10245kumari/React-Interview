import './App.css';
import Compo from './DAY2/CondRendering/Compo';
import ParentComponent from './DAY2/PropParent';
import RouterCompo from './DAY2/ROUTES/Router';
import USESTATE from './DAY1/Usestate'
import Colorcom from './MiniProject/Color';
import Propscom from './MiniProject/Props';
import Propscompo2 from './MiniProject/PropsClass';
import Statecompo from './DAY1/StateClass';
import Classeventhandler from './Eventhandler/Classevent';
import Functionalevent from './Eventhandler/Functionalevent';
import CounterApp from './MiniProject/props2'

function App() {
  return (
    <div className="App">
      {/* <ParentComponent></ParentComponent> */}
      {/* <RouterCompo></RouterCompo>  */}
      {/* <Compo></Compo> */}
      {/* <USESTATE></USESTATE> */}
      {/* <Colorcom></Colorcom> */}
      {/* <Propscom name='rani'>
        <h2>passing value using props</h2>
        <h3>welcome</h3>
           </Propscom>*/}
      {/* <Propscompo2 name='momo'></Propscompo2> */}
      {/* <Statecompo></Statecompo> */}
      <Classeventhandler></Classeventhandler>
      <Functionalevent></Functionalevent>
      {/* < CounterApp></CounterApp> */}
    </div>
  );
}

export default App;
