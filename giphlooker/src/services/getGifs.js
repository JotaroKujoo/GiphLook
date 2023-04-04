const apiKey = "TYSJ1tVatl4DQOARL57YvqWWlWJU1NC5"

export default function getGifs({keyword = "Jojos Bizzare"}={}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=5&offset=0&rating=g&lang=en`
    
    return fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        const {data = []} = response
        const gifs = data.map(image => {
            const {images, title, id} = image
            const {url} = images.downsized_medium
            return {url, title, id}
        })
        
        return gifs
      })
}