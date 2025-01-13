import axios from 'axios';
import React from 'react'
const session_id = localStorage.getItem("session");

export const fench = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    params:{
        api_key:"f44402f79564f6b266de86037898fe8e",
        ...(session_id && {session_id}),
    },
});
window.fench = fench
