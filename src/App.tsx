import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutApp from 'screens/AboutApp';
import Quotes from 'screens/Quotes';
import { ABOUT_APP, QUOTES } from 'constants/screens';
import { BottomTabsParamsList } from 'constants/types';
import { Provider } from 'mobx-react';
import quotes from 'store/quotes';

const Tab = createBottomTabNavigator<BottomTabsParamsList>();

const App = () => {
  return (
    <Provider quotes={quotes}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Tab.Navigator initialRouteName={ABOUT_APP}>
            <Tab.Screen name={ABOUT_APP} component={AboutApp} />
            <Tab.Screen name={QUOTES} component={Quotes} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
