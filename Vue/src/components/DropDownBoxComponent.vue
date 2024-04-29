<script setup lang="ts">
import DxDataGrid, { type DxDataGridTypes, DxColumn, DxPaging, DxSelection, DxScrolling } from 'devextreme-vue/data-grid';
import DxDropDownBox from 'devextreme-vue/drop-down-box';
import DxSelextBox, { type DxSelectBoxTypes } from 'devextreme-vue/select-box';
import DxPopup from 'devextreme-vue/popup';
import DxButton, { type DxButtonTypes } from 'devextreme-vue/button';

import { employees, states } from '../data';
import type CustomStore from 'devextreme/data/custom_store';
import { ref } from 'vue';

const dropdownOptions = {
  width: '500px',
};
const dataGridColumns = ['FullName', 'State', 'City'];

const props = defineProps<{
  value: number,
  onValueChanged(value: number): void,
  dataSource: any[],
}>();

const currentValue = ref(props.value);
const dropDownBoxRef = ref<DxDropDownBox | null>(null);
const popupRef = ref<DxPopup | null>(null);
const dataGridRefKey = ref<DxDataGrid | null>(null);

let popupVisible = false;

const onSelectionChanged = (e: DxDataGridTypes.SelectionChangedEvent) => {
  currentValue.value = e.selectedRowKeys[0];

  props.onValueChanged(currentValue.value);

  if (e.selectedRowKeys.length > 0) {
    dropDownBoxRef.value!.instance!.close();
  }
};

const onValueChanged = (e: DxSelectBoxTypes.ValueChangedEvent): void => {
  dataGridRefKey.value?.instance?.searchByText(e.value);
};

const onClick = (e:DxButtonTypes.ClickEvent) => {
  popupRef.value?.instance?.show();
};
</script>

<template>
  <DxDropDownBox
    ref="dropDownBoxRef"
    :drop-down-options="dropdownOptions"
    :input-attr="{ 'aria-label': 'Owner' }"
    :data-source="dataSource"
    v-model:value="currentValue"
    display-expr="FullName"
    value-expr="ID"
    content-template="contentTemplate"
  >
    <template #contentTemplate="{}">
      <DxPopup
        ref="popupRef"
        :width="400"
        :height="150"
        title="Search by state:"
        :shading="false"
        :visible="false"
        container=".dx-viewport"
      >
        <div>
          <DxSelextBox
            :items="states"
            :search-enabled="true"
            :show-clear-button="true"
            @value-changed="onValueChanged"
          />
        </div>
      </DxPopup>
      <DxButton
        text="Search"
        @click="onClick"
      />
      <DxDataGrid
        ref="dataGridRefKey"
        :data-source="dataSource"
        key-expr="ID"
        :remote-operations="true"
        :height="250"
        :selected-row-keys="[currentValue]"
        :hover-state-enabled="true"
        :on-selection-changed="onSelectionChanged"
        :focused-row-enabled="true"
        :focused-row-key="currentValue"
        :columns="dataGridColumns"
      >
        <DxPaging
          :enabled="true"
          :page-size="10"
        />
        <DxScrolling mode="virtual"/>
        <DxSelection mode="single"/>
      </DxDataGrid>
    </template>
  </DxDropDownBox>
</template>
