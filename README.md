<!-- default badges list -->
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T1222435)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->
# DataGrid for DevExtreme - How to prevent closing of a cell editor when a custom popup is clicked

This is the an example how to prevent closing of a cell editor when a custom popup is clicked.

![](./screencast.gif)

The idea is to add a MutationObserver "dx-dropdowneditor-overlay" CSS class to all overlays to prevent switching off the cell editor during overlay interactions.

```javascript
    const OVERLAY_CLASS = 'dx-overlay-wrapper';
    const BLOCK_CLICK_CLASS = 'dx-dropdowneditor-overlay';

    const $rootContainer = $('.dx-viewport')[0];
    const observer = new MutationObserver(() => {
    $(`.${OVERLAY_CLASS}`).addClass(BLOCK_CLICK_CLASS);
    });

    observer.observe($rootContainer, {
    attributes: false,
    childList: true,
    subtree: false,
    });
```


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
