import React from 'react'
import Board from './components/board'
import PackProvider from './provider/pack'

import { GlobalStyle } from './styles/global'

const App: React.FC = () => {
  return <PackProvider>
    <Board />
    <GlobalStyle />
  </PackProvider>
}

export default App
