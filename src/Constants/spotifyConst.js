export const authEndPoint = 'https://accounts.spotify.com/authorize'
const reDirectUrl = 'http://localhost:3000/'
const clientId = '314ff513946a42c3a2887f38eab07016'
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${reDirectUrl}&scope=${scopes.join("%20")}&response_type=code&show_dialog=true`