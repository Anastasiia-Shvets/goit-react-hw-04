import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/search/photos';

axios.defaults.headers.common['Authorization'] =
    'Client-ID nX-D9VWxMyRbhnbvLPtrdR9qAJUhk640DTa3JDApb3w';

axios.defaults.params = {
    orientation: 'landscape',
    per_page: 10,
};

export const getGallery = async (query, page) => {
    const { data } = await axios.get(`?query=${query}&page=${page}`);

    return data;
};