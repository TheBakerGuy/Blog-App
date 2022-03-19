import axios from 'axios';

const url = 'http://localhost:5000/recipes'


export const fetchRecipes = () => {
    return axios.get(url);
}

export const newRecipe = (params: any) => {
    return axios.post(`${url}/new`, params);
}