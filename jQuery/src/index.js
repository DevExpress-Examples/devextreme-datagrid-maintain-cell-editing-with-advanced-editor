const OVERLAY_CLASS = 'dx-overlay-wrapper';
const BLOCK_CLICK_CLASS = 'dx-dropdowneditor-overlay';

$(() => {
  const $rootContainer = $('.dx-viewport')[0];
  const observer = new MutationObserver(() => {
    $(`.${OVERLAY_CLASS}`).addClass(BLOCK_CLICK_CLASS);
  });

  observer.observe($rootContainer, {
    attributes: false,
    childList: true,
    // eslint-disable-next-line spellcheck/spell-checker
    subtree: false,
  });

  $('#gridContainer').dxDataGrid({
    dataSource: tasks,
    keyExpr: 'ID',
    showBorders: true,
    paging: {
      enabled: true,
      pageSize: 15,
    },
    editing: {
      mode: 'cell',
      allowUpdating: true,
    },
    onRowInserted(e) {
      e.component.navigateToRow(e.key);
    },
    columns: [
      {
        dataField: 'AssigneeID',
        allowSorting: false,
        lookup: {
          dataSource: employees,
          valueExpr: 'ID',
          displayExpr: 'FullName',
        },
        validationRules: [{ type: 'required' }],
        editCellTemplate: dropDownBoxEditorTemplate,
      }, 'Task',
    ],
  });

  const popupContentTemplate = function () {
    const popupMain = $('<div>');
    popupMain.append(
      $('<div>').dxSelectBox({
        items: states,
        searchEnabled: true,
        showClearButton: true,
        onValueChanged(e) {
          $('#grid').dxDataGrid('instance').searchByText(e.value);
        },
      }),
    );

    return popupMain;
  };

  function dropDownBoxEditorTemplate(cellElement, cellInfo) {
    return $('<div>').dxDropDownBox({
      dropDownOptions: { width: '500px' },
      dataSource: employees,
      value: cellInfo.value,
      valueExpr: 'ID',
      displayExpr: 'FullName',
      inputAttr: { 'aria-label': 'Owner' },
      contentTemplate(e) {
        const mainDiv = $('<div>');

        const popupDiv = $('<div>');
        popupDiv.dxPopup({
          width: '400px',
          height: '150px',
          contentTemplate: popupContentTemplate,
          title: 'Search by state:',
          shading: false,
        });
        mainDiv.append(popupDiv);

        const popupButton = $('<div>');
        popupButton.dxButton({
          text: 'Search',
          onClick(evt) {
            popupDiv.dxPopup('instance').show();
          },
        });
        mainDiv.append(popupButton);

        const dropDownDiv = $("<div id='grid'>");
        dropDownDiv.dxDataGrid({
          keyExpr: 'ID',
          dataSource: employees,
          remoteOperations: true,
          columns: ['FullName', 'State', 'City'],
          hoverStateEnabled: true,
          scrolling: { mode: 'virtual' },
          height: '250px',
          selection: { mode: 'single' },
          selectedRowKeys: [cellInfo.value],
          focusedRowEnabled: true,
          focusedRowKey: cellInfo.value,
          onSelectionChanged(selectionChangedArgs) {
            e.component.option(
              'value',
              selectionChangedArgs.selectedRowKeys[0],
            );
            cellInfo.setValue(selectionChangedArgs.selectedRowKeys[0]);
            if (selectionChangedArgs.selectedRowKeys.length > 0) {
              e.component.close();
            }
          },
        });
        mainDiv.append(dropDownDiv);
        return mainDiv;
      },
    });
  }
});
