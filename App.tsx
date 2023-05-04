/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import InitialScreen from './src/screens/InitialScreen/InitialScreen';
import {Colors} from './src/assets/Colors';
import StackNavigation from './src/navigation/Stack/StackNavigation';
import {NavigationContainer} from '@react-navigation/native';

function App(): JSX.Element {
  const [initialScreen, setInitialScreen] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setInitialScreen(false);
    }, 2000);
  }, []);

  return (
    <View style={s.container}>
      <SafeAreaView style={s.container}>
        {initialScreen ? (
          <InitialScreen />
        ) : (
          <NavigationContainer>
            <StackNavigation />
          </NavigationContainer>
        )}
      </SafeAreaView>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainBackground,
  },
});

export default App;
