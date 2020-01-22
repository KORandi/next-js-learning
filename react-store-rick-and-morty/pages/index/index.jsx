import React from 'react';
import {fetchDataAction} from "./_actions";
import EpisodeList from "../../components/EpisodeList";
import fetchEpisodes from "./_api";
import {Store} from "../../features/Store/Store";
import Layout from "../../components/Layout";

const Index = (props) => {
    const {state, dispatch} = React.useContext(Store);
    const {episodes, favourites} = state;
    React.useEffect(() => {
        if (state.episodes.length === 0) {
            fetchEpisodes().then((dataJSON) => {
                dispatch(fetchDataAction([...dataJSON._embedded.episodes, ...dataJSON._embedded.episodes, ...dataJSON._embedded.episodes,...dataJSON._embedded.episodes, ...dataJSON._embedded.episodes, ...dataJSON._embedded.episodes,...dataJSON._embedded.episodes, ...dataJSON._embedded.episodes, ...dataJSON._embedded.episodes,...dataJSON._embedded.episodes, ...dataJSON._embedded.episodes, ...dataJSON._embedded.episodes,...dataJSON._embedded.episodes, ...dataJSON._embedded.episodes, ...dataJSON._embedded.episodes,...dataJSON._embedded.episodes, ...dataJSON._embedded.episodes, ...dataJSON._embedded.episodes]));
            });
        }
    });

    return (
        <Layout>
            <section className='episode-layout'>
                <EpisodeList
                    episodes={episodes}
                    favourites={favourites}
                />
            </section>
        </Layout>
    );
};

export default Index;