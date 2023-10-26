

import './App.css';
import Compo from './DAY2/CondRendering/Compo';
import ParentComponent from './DAY2/PropParent';
import RouterCompo from './DAY2/ROUTES/Router';

function App() {
  return (
    <div className="App">
      {/* <ParentComponent></ParentComponent>
      <RouterCompo></RouterCompo> */}
      <Compo></Compo>
    </div>
  );
}

export default App;
