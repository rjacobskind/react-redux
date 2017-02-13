import React from 'react';
import AddSong from '../components/AddSong';
import store from '../store';
import {connect} from 'react-redux';
import {loadAllSongs, addSongToPlaylist} from '../action-creators/playlists';


//export default AddSongContainer;

const mapStateToProps = function(state, ownProps) {
  return {
    songs: state.songs,
    playlistId: state.playlists.selected.id
  };
}

const mapDispatchToProps = function(dispatch, ownProps){
  return {
    handleSubmit: function(playlistId, songId) {
      dispatch(addSongToPlaylist(playlistId, songId))
      .catch(() => this.setState({ error: true }));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      songId: 1,
      error: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      songId: evt.target.value,
      error: false
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const songId = this.state.songId;
    this.props.handleSubmit(this.props.playlistId, songId);
  }

  render() {
    return (
      <AddSong
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      songs={this.props.songs}
      error={this.state.error} />
    );
  }
});
