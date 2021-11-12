import axios from 'axios';

const fetchArticle = () => {
  return axios
    .get('http://localhost:5000/api/articles')
    .then(res => {
      const { data } = res;
      
      return {
        id: data.id,
        headline: data.headline,
        author: data.author,
        image: data.image,
        summary: data.summary,
        body :data.body
      };
    });
};

export default fetchArticle;
