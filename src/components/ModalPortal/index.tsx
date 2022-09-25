//import React from 'react';
import ReactDOM from 'react-dom';
import { ChildrenProps } from '../../interfaces/childrenProps';

const ModalPortal = ({children}:ChildrenProps) => {
    return ReactDOM.createPortal(
        children,
        document.getElementById('modal_add')!
    )
}

export default ModalPortal