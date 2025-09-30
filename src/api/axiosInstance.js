import axios from 'axios';
import { config } from 'config/config';

const axiosInstance = axios.create({
baseURL: config.apiBaseUrl, // 기본 URL 설정
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;
