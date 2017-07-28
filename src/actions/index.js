import axios from 'axios';
const url = "https://rocky-caverns-41214.herokuapp.com";
// const url = "http://localhost:8080";

export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
export const createAccount = (newUser) => ({
    type: CREATE_ACCOUNT,
    meta: newUser,
    promise: fetch(url + '/users/', {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: { 'Accept': 'application/json, text/plain, /', 'Content-Type': 'application/json' }
        
    })
})

export const LOG_IN = 'LOG_IN';
export const logIn = (username, password) => ({
    type: LOG_IN,
    meta: {username, password},
    promise: fetch(url + "/users/me", {
        method: "GET",
        headers: {
            Authorization: "Basic " + btoa(username + ":" + password)
        }
    })
})

export const LOG_OUT = 'LOG_OUT';
export const logOut = () => ({
    type: LOG_OUT
})

export const ANGER = 'ANGER';
export const anger = () => ({
    type: ANGER
})

export const ANXIOUS = 'ANXIOUS';
export const anxious = () => ({
    type: ANXIOUS
})

export const BLUE = 'BLUE';
export const blue = () => ({
    type: BLUE
})

export const ROMANTIC = 'ROMANTIC';
export const romantic = () => ({
    type: ROMANTIC
})

export const TRANQUIL = 'TRANQUIL';
export const tranquil = () => ({
    type: TRANQUIL
})

export const ENERGETIC = 'ENERGETIC';
export const energetic = () => ({
    type: ENERGETIC
})

export const TOGGLE_TRANSITION_MODAL = 'TOGGLE_TRANSITION_MODAL';
export const toggleTransitionModal = () => ({
    type: TOGGLE_TRANSITION_MODAL
})

export const RECORD_MOOD = 'RECORD_MOOD';
export const recordMood = (newMood) => ({
    type: RECORD_MOOD,
    promise: axios(url + "/tracker", {
        method: "POST",
        data: JSON.stringify(newMood),
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.headers
        }
    })
})



export const FETCH_MOOD = 'FETCH_MOOD';
export const fetchMood = () => ({
    type: FETCH_MOOD,
    promise: axios(url + "/tracker", {
        method: "GET",
   
        headers: {
   
            Authorization: localStorage.headers
        }
})
})

export const READ = 'READ';
export const read = () => ({
    type: READ
})

export const WATCH = 'WATCH';
export const watch = () => ({
    type: WATCH
})

export const LISTEN = 'LISTEN';
export const listen = () => ({
    type: LISTEN
})

export const NOURISH = 'NOURISH';
export const nourish = () => ({
    type: NOURISH
})

export const TOGGLE_READ_MODAL = "TOGGLE_READ_MODAL";
export const toggleReadModal = () => ({
    type: TOGGLE_READ_MODAL
})

export const TOGGLE_WATCH_MODAL = "TOGGLE_WATCH_MODAL";
export const toggleWatchModal = () => ({
    type: TOGGLE_WATCH_MODAL
})

export const TOGGLE_LISTEN_MODAL = "TOGGLE_LISTEN_MODAL";
export const toggleListenModal = () => ({
    type: TOGGLE_LISTEN_MODAL
})

export const TOGGLE_NOURISH_MODAL = "TOGGLE_NOURISH_MODAL";
export const toggleNourishModal = () => ({
    type: TOGGLE_NOURISH_MODAL
})

