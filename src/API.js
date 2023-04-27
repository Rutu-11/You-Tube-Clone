import axios from "axios";

console.log('key',process.env.REACT_APP_YOU_TUBE_API_KEY)
// const key = process.env.REACT_APP_YOU_TUBE_API_KEY;
const request = axios.create({
    baseURL:'https://youtube.googleapis.com/youtube/v3/',
    params: {
        // key : `${process.env.REACT_APP_YOU_TUBE_API_KEY}`,
        key:'AIzaSyDxwaaLMbi7I98CBFRU08glUMJJmtOsXwg'
    }
    
})

export default request;