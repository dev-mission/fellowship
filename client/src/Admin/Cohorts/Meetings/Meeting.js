import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

import Api from '../../../Api';

function Meetings() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [meeting, setMeeting] = useState();
  const [links, setLinks] = useState([]);

  useEffect(
    function () {
      Api.meetings.get(id).then((response) => setMeeting(response.data));
      Api.links.index(id).then((response) => setLinks(response.data));
    },
    [id]
  );

  function onClick(id) {
    navigate(`links/${id}/edit`);
  }

  return (
    <>
      <h2>Meeting</h2>
      {meeting && (
        <p>
          <b>Type:</b> {meeting.type}
          <br />
          <b>Starts at:</b> {meeting.startsAt}
          <br />
          <b>Ends at:</b> {meeting.endsAt}
          <br />
          <b>Desc: </b> {meeting.desc}
          <br />
          <Link className="btn btn-sm btn-outline-primary" to="edit">
            Edit
          </Link>
        </p>
      )}
      <h3>Links</h3>
      <Link className="btn btn-sm btn-outline-primary" to="links/new">
        New
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Position</th>
            <th>Type</th>
            <th>URL</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {links.map((l) => (
            <tr key={l.id} onClick={() => onClick(l.id)} style={{ cursor: 'pointer' }}>
              <td>{l.position}</td>
              <td>{l.type}</td>
              <td>{l.href}</td>
              <td>{l.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Meetings;
