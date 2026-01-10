import { Router, Route } from 'wouter';
import Home from './pages/Home';
import EtniaBraids from './pages/EtniaBraids';

export default function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/etnia" component={EtniaBraids} />
    </Router>
  );
}
