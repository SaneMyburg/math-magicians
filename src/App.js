import './components/calculator.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Calculator from './components/Calculator';
import QuotesDisplay from './components/quotes';
import Layout from './components/Layout';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="quotes" element={<QuotesDisplay />} />
    </Route>
  </Routes>
);
export default App;
