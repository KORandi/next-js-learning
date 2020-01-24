const API_URL = 'https://api.tvmaze.com/singlesearch/shows';

export default async function getEpisodes() {
    const data = await fetch(`${API_URL}?q=rick-&-morty&embed=episodes`);
    return await data.json();
}