import { Routes, Route } from 'react-router-dom';

import Meeting from './Meeting';
import MeetingForm from './MeetingForm';
import MeetingLinkForm from './MeetingLinkForm';
import MeetingsList from './MeetingsList';

function Meetings() {
  return (
    <Routes>
      <Route path="new" element={<MeetingForm />} />
      <Route path=":id/edit" element={<MeetingForm />} />
      <Route path=":meetingId/links/new" element={<MeetingLinkForm />} />
      <Route path=":meetingId/links/:id/edit" element={<MeetingLinkForm />} />
      <Route path=":id" element={<Meeting />} />
      <Route path="" element={<MeetingsList />} />
    </Routes>
  );
}

export default Meetings;
