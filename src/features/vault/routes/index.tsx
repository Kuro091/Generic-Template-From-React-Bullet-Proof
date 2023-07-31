import { Route, Routes } from 'react-router';
import Vault from './Vault';

export const VaultRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Vault />} />
    </Routes>
  );
};
