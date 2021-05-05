# modal

- サンプル：[streams](https://github.com/endw0901/react_typescript/tree/main/streams/client/src/components)

- [javascript](https://github.com/endw0901/javascript/tree/main/modal-menu-slider)

```
import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
```
