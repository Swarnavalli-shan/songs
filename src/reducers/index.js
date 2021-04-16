import {combineReducers} from 'redux';
const songListReducer = () => {
    return [
        {title:"barbie girl",duration:"3:45"},
        {title:"happy girl",duration:"2:45"},
        {title:"Believer",duration:"4:45"},
        {title:"wakka girls",duration:"1:45"}
    ];
};

const selectedSongReducer = (selectedSong = null,action) => {
    if( action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songList : songListReducer,
    selectedSong :selectedSongReducer
});