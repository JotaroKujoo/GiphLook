export default function GetGifsById(id) {
    const apiKey = "TYSJ1tVatl4DQOARL57YvqWWlWJU1NC5"
    const apiURL = `https://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}`
    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const {data = []} = response
            console.log(data)
            return data
        })
}