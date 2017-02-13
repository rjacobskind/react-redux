import React, {Component} from 'react';
import Album from '../components/Album';
import {toggleSong} from '../action-creators/player';
import {connect} from 'react-redux';


const mapStateToProps = function(state, ownProps){
  return {selectedAlbum: state.albums.selected,
          currentSong: state.player.currentSong,
          isPlaying: state.player.isPlaying
        };
}

const mapDispatchToProps = function(dispatch, ownProps){
  return {
          toggleOne: function(song, list){
            dispatch(toggleSong(song, list));
          }
        };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  class extends Component {

  constructor() {
    super();
  }

  render() {
    return <Album
      selectedAlbum={this.props.selectedAlbum}
      currentSong={this.props.currentSong}
      isPlaying={this.props.isPlaying}
      toggleOne={this.props.toggleOne}
    />;
  }
})


