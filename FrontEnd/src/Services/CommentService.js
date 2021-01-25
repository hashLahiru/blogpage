import axios from 'axios';
const COMMENT_API_BASE_URL="http://localhost:8080/api/comment/post/";

class CommentService{
    getComment(){
        return axios.get(COMMENT_API_BASE_URL);
    }

    postComment(comment){
        return axios.post(COMMENT_API_BASE_URL,comment);
    }
}
export default new CommentService();