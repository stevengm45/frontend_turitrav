import './App.css';
import FormLogIn from './views/formlogin';
import PageWrapper from './views/home';
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
import FormNewUser from './views/formnewuser';
import FuncFauna from './views/fauna';
import FuncFlora from './views/flora';
import FuncGastro from './views/gastro';
import FuncCultura from './views/cultura';


function App() {
  return (
 
    <BrowserRouter>
      <Route exact path="/" component={PageWrapper} />
      <Route excat path="/flora" component={FuncFlora} />
      <Route excat path="/fauna" component={FuncFauna} />
      <Route excat path="/culture" component={FuncCultura} />
      <Route excat path="/gastronomy" component={FuncGastro} />
      <Route excat path="/formlogin" component={FormLogIn} />
      <Route excat path="/formnewuser" component={FormNewUser} />

    </BrowserRouter>


            

    

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
