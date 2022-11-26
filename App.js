//import logo from './logo.svg';
/*import './App.css';
import Pro1 from './Pro1'
import Pro2 from './Pro2'
import Pro3 from './Pro3'
import Drainage from './Drainage'
import Electricity from './Electricity'
import Water from './Water'
import Road from './Road'
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Pro1}></Route>
        <Route exact path="/Pro2" component={Pro2}></Route>
        <Route exact path="/Pro3" component={Pro3}></Route>
        <Route exact path="/Drainage" component={Drainage}></Route>
        <Route exact path="/Water" component={Water}></Route>
        <Route exact path="/Electricity" component={Electricity}></Route>
        <Route exact path="/Road" component={Road}></Route>
      </Switch>
    </div>
    </Router>
  );
}
export default App;*/


import './App.css';
import Dropdown from './Dropdown';
function App() {
    var options = [
        { 'label': 'lime', 'value': 'lime' },
        { 'label': 'lavender', 'value': 'lavender' },
        { 'label': 'crimson', 'value': 'crimson' },
        { 'label': 'darkblue', 'value': 'darkblue' },
        { 'label': 'teal', 'value': 'teal' },
        { 'label': 'rebeccapurple', 'value': 'rebeccapurple' },
        { 'label': 'ghostwhite', 'value': 'ghostwhite' },
        { 'label': 'aquamarine', 'value': 'aquamarine' },
        { 'label': 'aliceblue', 'value': 'aliceblue' }
    ];
    return (
      <>

      <div className="heading">
        <center><h1>Color Changer</h1></center>
      </div>
      
      <div className="box">
        <div className="App">
          
            <Dropdown options={options} />
        </div>
      </div> 
      </>
    );
}

export default App;