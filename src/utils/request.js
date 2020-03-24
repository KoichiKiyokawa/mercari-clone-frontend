import axios from 'axios'

export const getItems = async() => (
  axios.get(process.env.ENDPOINT)
    .then(response => response.data)
)
