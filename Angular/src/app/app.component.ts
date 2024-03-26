import { Component, ElementRef } from '@angular/core';
import DataGrid from 'devextreme/ui/data_grid';
import Popup from 'devextreme/ui/popup';
import {
  employees, states, tasks, titlesPrefix,
} from './app.service';

const OVERLAY_CLASS = 'dx-overlay-wrapper';
const BLOCK_CLICK_CLASS = 'dx-dropdowneditor-overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dropdownOptions: any;

  tasks = tasks;

  employees = employees;

  titlePrefix = titlesPrefix;

  states = states;

  constructor(private readonly elementRef: ElementRef) {
    this.dropdownOptions = {
      width: '500px',
    };
  }

  onSelectionChanged(selectedRowKeys: any, cellInfo: any, component: any): void {
    cellInfo.setValue(selectedRowKeys[0]);
    if (selectedRowKeys.length > 0) {
      component.close();
    }
  }

  searchValueChanged(value: string): void {
    (DataGrid.getInstance(document.getElementById('gridId') as HTMLElement) as DataGrid).searchByText(value);
  }

  async openPopup(): Promise<void> {
    await (Popup.getInstance(document.getElementById('popId') as HTMLElement) as Popup).show();
  }

  ngOnInit(): void {
    const $rootContainer = this.elementRef.nativeElement.querySelector('.dx-viewport');

    if (!$rootContainer) {
      return;
    }

    const observer = new MutationObserver((mutationsList, observer) => {
      for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
          this.addBlockClickClass();
        }
      }
    });

    observer.observe($rootContainer, {
      attributes: false,
      childList: true,
      subtree: false,
    });
  }

  private addBlockClickClass(): void {
    const overlayElements = document.querySelectorAll(`.${OVERLAY_CLASS}`);
    overlayElements.forEach((element) => {
      element.classList.add(BLOCK_CLICK_CLASS);
    });
  }
}
