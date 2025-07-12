import React, { useCallback, useRef, useState } from 'react';

import {
  Button,
  DataGrid, DropDownBox, Popup, SelectBox,
} from 'devextreme-react';
// import { ColumnEditCellTemplateData } from 'devextreme/ui/data_grid';
import { type DataGridTypes, type DataGridRef, Selection } from 'devextreme-react/data-grid';
import { type SelectBoxTypes } from 'devextreme-react/select-box';
import { type DropDownBoxRef } from 'devextreme-react/drop-down-box';
// import { ValueChangedEvent } from 'devextreme/ui/select_box';
import { employees, states } from './data';

const dropdownOptions = {
  width: '500px',
};
const dataGridColumns = ['FullName', 'State', 'City'];

function DropDownBoxComponent(props: DataGridTypes.ColumnEditCellTemplateData): JSX.Element {
  const dropDownBoxRef = useRef<DropDownBoxRef>(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([props.data.value]);
  const dataGridRef = useRef<DataGridRef>(null);

  const contentRender = useCallback(() => {
    const onSelectionChanged = useCallback((args: DataGridTypes.SelectionChangedEvent): void => {
      setSelectedRowKeys(args.selectedRowKeys);
      dropDownBoxRef.current?.instance().close();
      setPopupVisible(false);
      props.data.setValue(args.selectedRowKeys[0]);
    }, []);

    const onValueChanged = useCallback((e: SelectBoxTypes.ValueChangedEvent): void => {
      dataGridRef.current?.instance().searchByText(e.value);
    }, []);

    const onClick = useCallback((): void => {
      setPopupVisible(true);
    }, []);

    return (
      <React.Fragment>
        <Popup
          width={400}
          height={150}
          title="Search by state:"
          shading={false}
          visible={popupVisible}>
          <SelectBox
            items={states}
            searchEnabled={true}
            showClearButton={true}
            onValueChanged={onValueChanged}></SelectBox>
        </Popup>
        <Button
          text="Search"
          onClick={onClick}></Button>
        <DataGrid
          ref={dataGridRef}
          columns={dataGridColumns}
          keyExpr="ID"
          dataSource={employees}
          height={250}
          defaultFocusedRowKey={selectedRowKeys[0]}
          selectedRowKeys={selectedRowKeys}
          focusedRowEnabled={true}
          onSelectionChanged={onSelectionChanged}>
          <Selection mode="single"></Selection>
        </DataGrid>
      </React.Fragment>
    );
  }, [popupVisible]);

  return (
    <React.Fragment>
      <DropDownBox
        ref={dropDownBoxRef}
        value={selectedRowKeys}
        defaultOpened={true}
        dropDownOptions={dropdownOptions}
        dataSource={employees}
        valueExpr="ID"
        displayExpr="FullName"
        contentRender={contentRender}
      />
    </React.Fragment>
  );
}

export default DropDownBoxComponent;
