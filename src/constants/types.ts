import { ABOUT_APP, QUOTES } from './screens';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { QuotesStore } from 'store/quotes';

export type BottomTabsParamsList = {
  [ABOUT_APP]: undefined;
  [QUOTES]: undefined;
};

export type AboutAppProps = {
  navigation: BottomTabNavigationProp<BottomTabsParamsList, 'About App'>;
};

export type Quote = {
  name: String;
  key: React.Key;
  last: String;
  highestBid: String;
  percentChange: String;
};

export type QuotesProps = {
  navigation: BottomTabNavigationProp<BottomTabsParamsList, 'Quotes'>;
  quotes: QuotesStore;
};
