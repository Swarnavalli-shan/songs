import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions';

class SongList extends React.Component{
    renderList () {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button onClick={() => this.props.selectSong(song)} className="ui button primary">
                            SELECT
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });

    };
    render (){  
        return <div className="ui divided list">{this.renderList()}</div>;
        };
};

const mapStateToProps = (state) => {
    console.log(state);
    return {songs:state.songList};
};

export default connect(mapStateToProps,{selectSong})(SongList);