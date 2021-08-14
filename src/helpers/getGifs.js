export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=GzMTeyFctqy3kJx7iD1dp6rXAVlbsPLE&q=${ encodeURI(category) }&limit=10`;
    const response =  await fetch(url);
    const {data} = await response.json();

    let gifs =  data.map(item => {
        return {
            id: item.id,
            url: item.images?.downsized_medium?.url,
            title: item.title
        }
    });
    return gifs;
};