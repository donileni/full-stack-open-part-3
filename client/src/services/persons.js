import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const addToList = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const updateContact = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const removeItem = id => {
    return axios.delete(`${baseUrl}/${id}`)
   
}

export default {getAll, addToList, removeItem, updateContact}