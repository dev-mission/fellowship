import { useEffect, useState } from 'react';
import { useMatch, useNavigate, Navigate, Routes, Route } from 'react-router-dom';

import Api from '../Api';
import './Home.scss';
import HomeLogo from './HomeLogo.png';
import HomeUberLogo from './HomeUberLogo.png';
import HomeC4SFLogo from './HomeC4SFLogo.png';
import Meetings from './Meetings';

function Home() {
  const [cohorts, setCohorts] = useState([]);
  const { params } = useMatch('/:cohortSlug') || {};
  const { cohortSlug } = params || {};
  const cohort = cohorts.find((c) => c.slug === cohortSlug);
  const navigate = useNavigate();

  useEffect(function () {
    Api.cohorts.index().then((response) => setCohorts(response.data));
  }, []);

  function onChange(event) {
    navigate(event.target.value);
  }

  return (
    <main className="container">
      <div className="row">
        <div className="col-md-4 text-center">
          <h1 className="mb-5">
            <img id="home__devmission" src={HomeLogo} alt="Dev/Mission" /> Fellowship
          </h1>
          <p>In partnership with</p>
          <p>
            <img id="home__uber" src={HomeUberLogo} alt="Uber Open Source" />
          </p>
          <p>and</p>
          <p className="mb-5">
            <img id="home__c4sf" src={HomeC4SFLogo} alt="Code for San Francisco" />
          </p>
          {cohorts.length > 0 && (
            <select className="form-select mb-5 text-center" onChange={onChange}>
              {cohorts.map((c) => (
                <option key={c.id} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          )}
        </div>
        <div className="col-md-7 offset-md-1">
          {cohorts.length > 0 && (
            <Routes>
              <Route path="" element={<Navigate to={`/${cohorts[0].slug}`} />} />
              <Route path="*" element={<>{cohort && <Meetings cohortId={cohort.id} cohortStartsOn={cohort.startsOn} />}</>} />
            </Routes>
          )}
        </div>
      </div>
    </main>
  );
}

export default Home;
