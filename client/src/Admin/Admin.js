import { useMatch, Link, Navigate, Routes, Route } from 'react-router-dom';
import classNames from 'classnames';

import Api from '../Api';
import Cohorts from './Cohorts';
import { useEffect, useState } from 'react';

function Admin() {
  const { params } = useMatch('cohorts/:cohortId') || {};
  const cohortId = parseInt(params?.cohortId);

  const [cohort, setCohort] = useState();
  useEffect(
    function () {
      setCohort(null);
      if (cohortId) {
        Api.cohorts.get(cohortId).then((response) => setCohort(response.data));
      }
    },
    [cohortId]
  );

  return (
    <main className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="list-group mb-3">
            <Link
              className={classNames('list-group-item', 'list-group-item-action', { active: useMatch('cohorts') && !cohortId })}
              to="cohorts">
              Cohorts
            </Link>
          </div>
          {cohort && (
            <>
              <hr />
              <h5>{cohort.name}</h5>
              <p>
                <Link className="btn btn-sm btn-outline-primary" to={`cohorts/${cohort.id}/edit`}>
                  Edit
                </Link>
              </p>
            </>
          )}
          <div className={classNames('list-group', { 'd-none': !cohort })}>
            <Link
              className={classNames('list-group-item', 'list-group-item-action', {
                active: useMatch(`cohorts/${cohortId}/meetings`),
              })}
              to={`cohorts/${cohortId}/meetings`}>
              Meetings
            </Link>
          </div>
        </div>
        <div className="col-md-9">
          <Routes>
            <Route path="cohorts/*" element={<Cohorts />} />
            <Route path="" element={<Navigate to={`cohorts`} />} />
          </Routes>
        </div>
      </div>
    </main>
  );
}

export default Admin;
