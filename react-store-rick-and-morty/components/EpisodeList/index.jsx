import React from 'react'
import EpisodeBox from "../EpisodeBox";
import {Store, StoreProvider} from "../../features/Store/Store";


export default class EpisodeList extends React.Component {

    render() {
        const {episodes, favourites} = this.props;
        return (
            <Store.Consumer>
                {(context) => (
                    episodes.map((episode, index) => (
                        <EpisodeBox key={index} episode={episode} storage={context} favourites={favourites}/>
                    ))
                )}
            </Store.Consumer>
        );
    }
}