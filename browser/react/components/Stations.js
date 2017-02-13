import React from 'react';
import {Link} from 'react-router';

export default (props) => {
  const STATIONS_DATA = Object.keys(props.stations);
  return (
    <div>
      <h3>Stations</h3>
      <div className="list-group">
      {
        STATIONS_DATA.map(station => {
          return (
            <div className="list-group-item" key={station}>
              <Link to={`/stations/${station}`}>{station}</Link>
            </div>
          );
        })
      }
      </div>
    </div>
  )
}
