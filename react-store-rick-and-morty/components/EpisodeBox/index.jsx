import React from 'react';
import {addFavourite, removeFavourite} from "./actions";

class EpisodeBox extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    toggleFavAction(episode) {
        const {dispatch, state} = this.props.storage;
        const {favourites} = state;
        const episodeInFavourites = favourites.includes(episode.id);
        if (episodeInFavourites) {
            dispatch(removeFavourite(episode));
        } else {
            dispatch(addFavourite(episode));
        }
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.episode.id === nextProps.storage.state.lastEpisodeChange;
    }

    render() {
        const {episode, storage} = this.props;
        const {image, name, number, season} = episode;
        const {state} = storage;
        const {favourites} = state;
        return(
            <section className='episode-box'>
                {console.log('rerendering!')}
                <img
                    src={image.medium}
                    alt={`Rick and Morty ${name}`}
                />
                <div>{name}</div>
                <section style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        Season: {season} Number: {number}
                    </div>
                    <button type='button' onClick={() => this.toggleFavAction(episode)}>
                        {favourites.find(fav => fav === episode.id) ? 'Unfav' : 'Fav'}
                    </button>
                </section>
            </section>
        );
    }
}
// EpisodeBox.contextType = Store;

export default EpisodeBox;