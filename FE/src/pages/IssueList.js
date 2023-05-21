import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { FilterSection } from '../components/filterSection/FiterSection';
import { Header } from '../components/Header';
import { IssueListContainer } from '../components/issueList/IssueListContainer';

export const IssueListContext = React.createContext();

const IssueListPage = styled.div`
  width: 1280px;
  margin: 0 auto;
`;

export const IssueList = () => {
  // TODO : dispatch, useReducer 사용예정
  const [data, dispatch] = useState([]);
  const initData = async () => {
    const response = await fetch('/issueList');
    const resData = await response.json();
    dispatch(resData);
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <IssueListContext.Provider value={data}>
      <IssueListPage>
        <Header />
        <FilterSection />
        <IssueListContainer />
      </IssueListPage>
    </IssueListContext.Provider>
  );
};