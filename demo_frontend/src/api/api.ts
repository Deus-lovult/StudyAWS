import axios from "axios";

export const api = () =>{

    return axios.create({
    
    // 環境変数から読み込む（VITE_ を忘れずに！）
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
})
    
} 