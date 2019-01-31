import React from "react";
import { Page } from './page'
import BoardContainer from "../containers/BoardContainer";


export const KanbanPage = props => {
  return (
    <Page>
      <BoardContainer {...props} />
    </Page>
  );
};
