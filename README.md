<!-- default badges list -->
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T1222435)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->
# DataGrid for DevExtreme - How to prevent edit mode from closing when another DataGrid is used to edit cells

Normally, you can click outside the DataGrid component to interrupt a cell editing. If you use another (child) DataGrid to edit cells, the following issue may occur.

Overlay components (for example, columnChooser) insert their DOM in the root of the DOM tree, not inside the DOM of their parent components. If you open an overlay component inside the child DataGrid, this component's DOM will be outside the child DataGrid DOM. Therefore, if you click the overlay, the parent DataGrid will handle this click as a click outside of its area, and the cell editing is closed. 

To prevent this issue, [monitor the DOM](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) for new elements. If an overlay appears, mark it with a `dx-dropdowneditor-overlay` CSS class to prevent the parent DataGrid from mistaking the click as outside and closing edit mode.

![DataGrid with Overlays Working as Expected](./screencast.gif)

## Files to Review

- **jQuery**
    - [index.js](jQuery/src/index.js)
- **Angular**
    - [app.component.html](Angular/src/app/app.component.html)
    - [app.component.ts](Angular/src/app/app.component.ts)
- **Vue**
    - [Home.vue](Vue/src/components/HomeContent.vue)
    - [DropDownBoxComponent.vue](Vue/src/components/DropDownBoxComponent.vue)
- **React**
    - [App.tsx](React/src/App.tsx)
    - [DropDownBoxComponent.tsx](React/src/DropDownBoxComponent.tsx)
- **NetCore**    
    - [Index.cshtml](ASP.NET%20Core/Views/Home/Index.cshtml)

## Documentation

- [DataGrid: How to Customize Editors](https://js.devexpress.com/jQuery/Documentation/Guide/UI_Components/DataGrid/Editing/#Customize_Editors)

## More Examples

- [DataGrid Demo: Custom Editors](https://js.devexpress.com/jQuery/Demos/WidgetsGallery/Demo/DataGrid/CustomEditors/MaterialBlueLight/)
