import {connect} from 'react-redux';
import Stations from '../components/Stations';

function convertToStations(songArr){
  const stations = {};
  songArr.forEach(function(song) {
    var genre = song.genre;
    if (!stations.hasOwnProperty(genre)) {
      stations[genre] = [];
    }
    stations[genre].push(song);
  });
  return stations;
}


const mapStateToProps = (state) => {
  return {
    stations: convertToStations(state.songs)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {};
}


export default connect(mapStateToProps, mapDispatchToProps)(Stations);
