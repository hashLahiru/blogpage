
import axios from 'axios';
const ARTICLE_API_BASE_URL="http://localhost:8080/api/blog/article";

class ArticleService{

    createArticle(article){
        return axios.post(ARTICLE_API_BASE_URL,article);
    }
}
export default new ArticleService();