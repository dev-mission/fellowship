import { Navigate, Routes, Route } from 'react-router-dom';

import CohortForm from './CohortForm';
import CohortsList from './CohortsList';
import Meetings from './Meetings';

function Cohorts() {
  return (
    <Routes>
      <Route path="new" element={<CohortForm />} />
      <Route path=":id/edit" element={<CohortForm />} />
      <Route path=":cohortId/meetings/*" element={<Meetings />} />
      <Route path=":id" element={<Navigate to="meetings" />} />
      <Route path="" element={<CohortsList />} />
    </Routes>
  );
}

export default Cohorts;
