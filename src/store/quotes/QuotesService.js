import axios from 'axios';

class QuotesService {
  get = async (params = {}) => {
    console.log('API:REQUEST');
    const { data } = await axios.get('https://poloniex.com/public', { params });
    console.log('API:RESPONSE');
    return data;
  };
}

export default QuotesService;
