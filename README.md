<!-- default badges list -->
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T1222435)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->
# DevExtreme DataGrid - How to maintain Edit Mode state (active) when using an advanced UI component for cell editing 

Our JavaScript DataGrid allows you to integrate/embed advanced UI components for cell editing purposes. For example, your DevExtreme-powered app can select a DataGrid cell value from a list displayed within a different DataGrid. 

![DataGrid with another DataGrid as an editor control](./screencast.gif)

Embedded controls can display overlays, such as column choosers or filter dialogs. These pop-up dialogs insert their code into the root of the DOM tree, not inside the DOM of their parent components. When a user clicks on such an overlay element, the DataGrid assumes that the interaction occurred outside the component. As a result, it cancels Edit Mode. This behavior disrupts the intended user experience (in this instance, using a DataGrid as an embedded editor). 

You can maintain Edit Mode state (keep it active) even if a user interacts with an embedded control’s overlay. [Monitor the DOM](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) for new elements. If an overlay appears, mark it with the following CSS class: `dx-dropdowneditor-overlay`. The DataGrid then treats this element as part of the component UI and maintains Edit Mode state (active). 

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
