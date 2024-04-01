import {
  Component, ElementRef, OnInit, ViewChild,
} from '@angular/core';
import DataGrid from 'devextreme/ui/data_grid';
import Popup from 'devextreme/ui/popup';
import { DxDataGridComponent, DxPopupComponent } from 'devextreme-angular';
import {
  employees, states, tasks, titlesPrefix,
} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('targetDataGrid', { static: false }) dataGrid?: DxDataGridComponent;

  @ViewChild('targetPopup', { static: false }) popup?: DxPopupComponent;

  dropdownOptions: any;

  tasks = tasks;

  employees = employees;

  titlePrefix = titlesPrefix;

  states = states;

  private readonly overlayClass = 'dx-overlay-wrapper';

  private readonly blockClickClass = 'dx-dropdowneditor-overlay';

  constructor(private readonly elementRef: ElementRef) {
    this.dropdownOptions = {
      width: '500px',
    };
  }

  ngOnInit(): void {
    const observer = new MutationObserver(() => {
      this.handleMutation();
    });
    observer.observe(this.elementRef.nativeElement.parentElement, {
      attributes: false,
      childList: true,
      subtree: false,
    });
  }

  private handleMutation(): void {
    const overlays = document.querySelectorAll(`.${this.overlayClass}`);
    overlays.forEach((overlay) => {
      overlay.classList.add(this.blockClickClass);
    });
  }

  onSelectionChanged(selectedRowKeys: any, cellInfo: any, component: any): void {
    cellInfo.setValue(selectedRowKeys[0]);
    if (selectedRowKeys.length > 0) {
      component.close();
    }
  }

  searchValueChanged(value: string): void {
    this.dataGrid?.instance.searchByText(value);
  }

  openPopup(): void {
    this.popup?.instance.show().catch(() => {});
  }
}
