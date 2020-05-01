import {Popover} from "antd";
import React, {ReactElement, useState} from "react";

interface PopoverButtonProps {
    button: ReactElement,
    children: (close: () => any) => ReactElement
}

const PopoverButton: React.FC<PopoverButtonProps & React.HTMLAttributes<HTMLElement>> = ({children, button, ...attributes}) => {
    const [visible, setVisible] = useState();

    return (
        <Popover
            content={children(() => setVisible(false))}
            trigger="click"
            visible={visible}
            onVisibleChange={setVisible}
        >
            {button}
        </Popover>
    );
};

export default PopoverButton;