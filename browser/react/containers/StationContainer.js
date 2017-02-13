import React from 'react';
import {connect} from 'react-redux';
import Station from '../components/Station';
import {convertSong} from '../utils';
import {toggleSong} from '../action-creators/player';


const mapStateToProps = function(state, ownProps){
  return {
    songs: state.songs.filter(song => {
      return song.genre === ownProps.params.genreName
    }).map(convertSong),

    station: ownProps.params.genreName,

    currentSong: state.player.currentSong,

    isPlaying: state.player.isPlaying
  };
};

const mapDispatchToProps = function(dispatch, ownProps){
  return {
    toggleOne: function(song, list) {
      dispatch(toggleSong(song, list));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Station);
