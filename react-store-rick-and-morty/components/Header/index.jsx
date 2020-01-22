import React from 'react';
import Link from "next/link";
import {Store} from "../../features/Store/Store";

const Header = (props) => {
    const {state} = React.useContext(Store);
    const {favourites} = state;
    return (
        <header className='header'>
            <div>
                <h1>Rick and Morty</h1>
                <p>Pick your favourite episodes</p>
            </div>
            <div>
                <Link href={'/'}>
                    <a>Home</a>
                </Link>{' '}
                <Link href={'/favourites'}>
                    <a>Favourite(s) {favourites.length}</a>
                </Link>
            </div>
        </header>
    )
};

export default Header;