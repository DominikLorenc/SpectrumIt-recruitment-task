import { Layout } from './components/Layout';
import { Form } from './components/Form';
import { Routes, Route } from 'react-router-dom';

import { UserProvider } from './context/Provider';

const App = () => {


  return (
    <UserProvider>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="form" element={<Form />} />
    </Routes>
    </UserProvider>
  );
};

export default App;
