import axios from 'axios';
// const KEY='AIzaSyBZuXpauh6yM2Ep6Hq3eH7a-FAMstZ3wCk';//AIzaSyBZuXpauh6yM2Ep6Hq3eH7a-FAMstZ3wCk

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        maxResults:5,
        
    }
});

