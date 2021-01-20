import axios from 'axios';
const ARTICLE_API_BASE_URL="http://localhost:8080/api/article/post/4";

class ArticleService{
    getArticle(){
        return axios.get(ARTICLE_API_BASE_URL);
    }

    postArticle(article){
        return axios.post(ARTICLE_API_BASE_URL,article);
    }
}
export default new ArticleService();