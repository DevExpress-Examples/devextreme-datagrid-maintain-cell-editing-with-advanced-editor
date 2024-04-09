import './App.css';
import 'devextreme/dist/css/dx.light.css';
import React from 'react';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';
import { DataGrid } from 'devextreme-react';
import {
  Column, Editing, Lookup, Paging,
} from 'devextreme-react/data-grid';
import { employees, tasks } from './data';
import useOverlayObserver from './OverlayObserver';
import DropDownBoxComponent from './DropDownBoxComponent';

const dataSource = new DataSource({
  store: new ArrayStore({
    data: tasks,
    key: 'ID',
  }),
});

const App = (): JSX.Element => {
  useOverlayObserver();

  return (
    <React.Fragment>
      <DataGrid
        dataSource={dataSource}
        showBorders={true}>
        <Paging
          enabled={true}
          pageSize={15}>
        </Paging>
        <Editing
          mode="cell"
          allowUpdating={true}
        ></Editing>
        <Column
          dataField='AssigneeID'
          editCellComponent={DropDownBoxComponent}>
          <Lookup
            dataSource={employees}
            valueExpr="ID"
            displayExpr="FullName"></Lookup>
        </Column>
        <Column dataField='Task'></Column>
      </DataGrid>
    </React.Fragment>
  );
};

export default App;
