import './matDialog.scss';

import {MDCDialog} from '@material/dialog';


export function init(ref, component) {
  ref.matBlazorRef = new MDCDialog(ref);

  ref.addEventListener('MDCDialog:closed', () => {
    component.invokeMethodAsync('MatDialogClosedHandler');
  });
  
  ref.addEventListener('MDCDialog:opened', () => {
    component.invokeMethodAsync('MatDialogOpenedHandler');
  });
}


export function setIsOpen(ref, v) {
  if (v) {
    ref.matBlazorRef.open();
  } else {
    ref.matBlazorRef.close();

  }
}
