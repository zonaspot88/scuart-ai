import { Router, Route } from 'wouter';
import Home from './pages/Home';
import EtniaBraids from './pages/EtniaBraids';
import About from './pages/About';

export default function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/etnia" component={EtniaBraids} />
    </Router>
  );
}
