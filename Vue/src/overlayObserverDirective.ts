export const overlayObserverDirective = {
  mounted(el:any) {
    const overlayClass = 'dx-overlay-wrapper';
    const blockClickClass = 'dx-dropdowneditor-overlay';

    const handleMutation = () => {
      const overlays = document.querySelectorAll(`.${overlayClass}`);
      overlays.forEach(overlay => {
        overlay.classList.add(blockClickClass);
      });
    };

    const observer = new MutationObserver(handleMutation);

    // Start observing changes in the parent of the target element
    const rootContainer = document.querySelector('.dx-viewport');
    if (rootContainer) {
      observer.observe(rootContainer, {
        attributes: false,
        childList: true,
        subtree: false
      });
    }

    // Clean up
    el.__overlayObserver__ = observer;
  },
  beforeUnmount(el:any) {
    if (el.__overlayObserver__) {
      el.__overlayObserver__.disconnect();
      delete el.__overlayObserver__;
    }
  }
};

export default {};
