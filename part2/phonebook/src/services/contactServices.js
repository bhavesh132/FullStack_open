import axios from "axios";

const baseUrl = 'http://localhost:3001/persons'

const getContacts = () => {
    const request = axios.get(baseUrl)
    return request.then((response) => response.data)
}

const updateContacts = (id, obj)  => {
    const request = axios.put(`${baseUrl}/${id}`, obj)
    return request.then((response) => response.data)
}

const createContacts = (newObj) => {
    const request = axios.post(baseUrl, newObj)
    return request.then((response) => response.data)
}

const deleteContacts = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request
}


export default {getContacts, updateContacts, deleteContacts, createContacts }