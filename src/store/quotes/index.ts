import { Quote } from 'constants/types';
import { runInAction, makeObservable, observable } from 'mobx';
import QuotesService from './QuotesService';

export class QuotesStore {
  constructor() {
    this.QuotesService = new QuotesService();
    makeObservable(this, {
      data: observable,
      isFetching: observable,
      isError: observable,
    });
  }
  QuotesService: QuotesService;
  data: Quote[] = [];
  isFetching: boolean = false;
  isError: boolean = false;

  async getQuotesAsync() {
    this.isFetching = true;
    try {
      const data = await this.QuotesService.get({
        command: 'returnTicker',
      });

      const quotes = Object.keys(data).reduce(
        (prev, curr) => [
          ...prev,
          {
            last: data[curr].last,
            highestBid: data[curr].highestBid,
            percentChange: data[curr].percentChange,
            name: curr,
            key: curr,
          },
        ],
        [] as Quote[],
      );
      runInAction(() => {
        this.data = quotes;
        this.isFetching = false;
        this.isError = false;
      });
    } catch (error) {
      console.log(error.message);
      runInAction(() => {
        this.isFetching = false;
        this.isError = true;
      });
    }
  }
}

export default new QuotesStore();
