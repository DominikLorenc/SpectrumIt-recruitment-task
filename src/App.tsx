import { Layout } from './components/Layout';
import { Form } from './components/Form';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="form" element={<Form />} />
    </Routes>
  );
};

export default App;
