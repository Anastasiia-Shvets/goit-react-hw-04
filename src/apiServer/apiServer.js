import axios from 'axios';

const API_KEY = 'nX-D9VWxMyRbhnbvLPtrdR9qAJUhk640DTa3JDApb3w';
axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
    orientation: 'landscape',
    per_page: 10,
};

export const getGalerry = async (query, page) => {
    const { data } = await axios.get(`search?query=${query}&page=${page}`);

    return data;
};