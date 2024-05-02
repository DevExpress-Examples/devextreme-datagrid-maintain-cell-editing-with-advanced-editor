<script setup lang="ts">
import 'devextreme/dist/css/dx.light.css';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';

import DxDataGrid, { DxPaging, DxEditing, DxColumn, DxLookup } from 'devextreme-vue/data-grid';

import DropDownBoxComponent from './DropDownBoxComponent.vue';
import { tasks, employees } from '../data';

const dataSource = new DataSource({
  store: new ArrayStore({
    data: tasks,
    key: 'ID',
  }),
});

</script>
<template>
  <div v-overlay-observer>
    <DxDataGrid
      :data-source="dataSource"
      :show-borders="true"
    >
      <DxPaging
        :enabled="true"
        :page-size="15"
      />
      <DxEditing
        :allow-updating="true"
        mode="cell"
      />
      <DxColumn
        data-field="AssigneeID"
        edit-cell-template="dropDownBoxEditor"
      >
        <DxLookup
          :data-source="employees"
          value-expr="ID"
          display-expr="FullName"
        />
      </DxColumn>
      <DxColumn
        data-field="Task"
      />
      <template #dropDownBoxEditor="{ data: cellInfo }">
        <DropDownBoxComponent
          :value="cellInfo.value"
          :on-value-changed="cellInfo.setValue"
          :data-source="employees"
        />
      </template>
    </DxDataGrid>
  </div>
</template>
