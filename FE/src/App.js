import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Header } from './components/Header';
import { IssueList } from './pages/IssueList';
import { NewIssue } from './pages/NewIssue';
import { GlobalStyle } from './styles/GlobalStyle';
import { lightTheme } from './styles/theme';

const App = () => {
  return (
    <>
      {/* <ThemeProvider theme={lightTheme}> */}
      <GlobalStyle />
      <BrowserRouter>
        <div className="App">
          {/* TODO : user 로그인 하면 헤더 고정 시키기 <Header /> */}
          <Routes>
            <Route path="/" element={<IssueList />} />
            <Route path="/newIssue" element={<NewIssue />} />
          </Routes>
        </div>
      </BrowserRouter>
      {/* </ThemeProvider> */}
    </>
  );
};

export default App;