import logo from './logo.svg';
import background from './images/library2.jpg';
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';

function App() {
  return (
    <div style={{backgroundImage:`url(${background})`}} className="App">
       <div className="header">
        <Header>

        </Header>
       </div>
       <div className="body">
          <Body>
            
          </Body>
       </div>
     </div>
  );
}

export default App;
