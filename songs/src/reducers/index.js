import {combineReducers} from 'redux';

 const songsReducer = () => {
    return[
        {title : 'No Scrubs', duration: '4:05'},
        {title : 'Pilla Raa', duration: '2:09'},
        {title : 'Sahoo', duration: '4.00'},
        {title: 'Bahubali', duration:'9.00'}
    ];
}

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    } 

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});