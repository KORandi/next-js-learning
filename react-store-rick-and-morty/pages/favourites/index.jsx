import React from 'react';
import Layout from "../../components/Layout";
import EpisodeList from "../../components/EpisodeList";
import {Store} from "../../features/Store/Store";
import {addFavourite, removeFavourite} from "../index/_actions";

const Favourites = (props) => {
    const {state, dispatch} = React.useContext(Store);
    const {favourites} = state;
    return (
        <Layout>
            <section className='episode-layout'>
                <EpisodeList
                    episodes={favourites}
                    favourites={favourites}
                />
            </section>
        </Layout>
    );
};

export default Favourites;