import config from "../config/config";

export const getTrending = async (media_type = 'all', time_window = 'day') => {

    const {ApiKey, Endpoint} = config;
    // https://api.themoviedb.org/3/trending/all/week?api_key=062c31584682fab0926b2ab345e9e079
    const url = `${Endpoint}/trending/${media_type}/${time_window}?api_key=${ApiKey}`;
    const resp = await fetch( url ); //GET
    const { results } = await resp.json();
    
    return results;
}