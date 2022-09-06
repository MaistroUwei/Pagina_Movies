import config from "../config/config";

export const getTrending = async (media_type = 'all', time_window = 'day') => {
    const {ApiKey, Endpoint} = config;
    // https://api.themoviedb.org/3/trending/all/week?api_key=062c31584682fab0926b2ab345e9e079
    const url = `${Endpoint}/trending/${media_type}/${type_window}?api_key=${ApiKey}`;
    const resp = fetch( url );
    const { results } = await resp.json();

}