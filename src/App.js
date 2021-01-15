import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'
import People from './components/People/People';
import Info from './components/Info/Info';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const queryClient = new QueryClient()


function App() {

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <People />
            </Route>
            <Route exact path="/info/:id">
              <Info />
            </Route>
          </Switch>
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
