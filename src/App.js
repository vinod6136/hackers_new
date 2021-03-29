import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopStories from './Components/Main/TopStories';
import Header from './Components/Main/Header';
import Footer from './Components/Main/Footer';
import NewStories from './Components/Main/NewStories'
import Ask from './Components/Main/Ask';
import Jobs from './Components/Main/Jobs';


const navLinks = ['new', 'ask', 'show', 'jobs'];
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <center>
          <table id="main" border="0" cellPadding="0" cellSpacing="0" width="85%" bgcolor="#f6f6ef">
            <tbody>

              <tr bgcolor="#ff6600"><td><Header links={navLinks} /></td></tr>
              <tr id="pagespace" title="New Links" style={{ height: '10px' }}></tr>
              <tr>
                <td>
                  <Switch>
                    <Route exact path="/"><TopStories /></Route>
                    <Route path="/top"><TopStories /></Route>
                    <Route path="/new"><NewStories /></Route>
                    <Route path="/ask"><Ask /></Route>
                    <Route path="/jobs"><Jobs /></Route>
                  </Switch>
                </td></tr>
              <tr><td><img src="s.gif" height="10" width="0" alt="" />
                <Footer />
              </td></tr>
            </tbody>
          </table>
        </center>
      </BrowserRouter>
    </div>
  );
}

export default App;
