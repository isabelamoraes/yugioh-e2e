import React from 'react';
import {
  StatusBar
} from 'react-native';
import 'react-native-reanimated';
import { ThemeProvider } from 'styled-components';
import Board from './components/board';
import PackProvider from './provider/pack';
import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <PackProvider>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <Board />
      </PackProvider>
    </ThemeProvider>
  );
};

export default App;
