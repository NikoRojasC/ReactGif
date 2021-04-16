export const getGifs = async(categoria)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=yUmQCNaeG37VomO12eNWuMjyZgRgDGqw&q=${encodeURI(categoria)}&limit=5`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.original.url
        }
    })
    return gifs;
}