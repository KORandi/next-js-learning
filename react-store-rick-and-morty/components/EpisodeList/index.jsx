import React from 'react'
import EpisodeBox from "../EpisodeBox";
import {Store} from "../../features/Store/Store";


export default function EpisodeList(props) {
    const {episodes, favourites} = props;
    const storage = React.useContext(Store);
    return (
        episodes.map((episode, index) => (
            <EpisodeBox key={index} episode={episode} storage={storage} favourites={favourites}/>
        ))
    );
}