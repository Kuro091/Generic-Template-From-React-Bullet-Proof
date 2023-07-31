import { Route, Routes } from 'react-router';
import AirFlow from './AirFlow';

export const AirFlowRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<AirFlow />} />
    </Routes>
  );
};
