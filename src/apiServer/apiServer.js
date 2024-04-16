import axios from 'axios';

const API_KEY = 'nX-D9VWxMyRbhnbvLPtrdR9qAJUhk640DTa3JDApb3w';
axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] =
    'Client-ID LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';
axios.defaults.params = {
    orientation: 'landscape',
    per_page: 10,
};

export const getGalerry = async (query, page) => {
    const { data } = await axios.get(`search?query=${query}&page=${page}`);

    return data;
};