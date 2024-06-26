import { useEffect } from 'react';

const overlayClass = 'dx-overlay-wrapper';
const blockClickClass = 'dx-dropdowneditor-overlay';

const useOverlayObserver = (): void => {
  useEffect(() => {
    const handleMutation = (): void => {
      const overlays = document.querySelectorAll(`.${overlayClass}`);
      overlays.forEach((overlay) => {
        overlay.classList.add(blockClickClass);
      });
    };

    const observer = new MutationObserver(handleMutation);

    const rootContainer = document.querySelector('.dx-viewport');
    if (rootContainer) {
      observer.observe(rootContainer, {
        attributes: false,
        childList: true,
        subtree: false,
      });
    }

    return (): void => {
      observer.disconnect();
    };
  }, []);
};

export default useOverlayObserver;
