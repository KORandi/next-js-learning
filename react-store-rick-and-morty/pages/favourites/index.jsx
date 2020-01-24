import React from 'react';
import Layout from "../../components/Layout";
import EpisodeList from "../../components/EpisodeList";
import {Store} from "../../features/Store/Store";

const Favourites = (props) => {
    const {state, dispatch} = React.useContext(Store);
    const {favourites, episodes} = state;
    let list = episodes.filter((episode) => (favourites.indexOf(episode.id) !== -1));
    return (
        <Layout>
            <section className='episode-layout'>
                <EpisodeList
                    episodes={list}
                    favourites={favourites}
                />
            </section>
        </Layout>
    );
};

export default Favourites;