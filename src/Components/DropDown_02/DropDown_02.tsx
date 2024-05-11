import React, {
    FC, ReactNode, RefObject, useRef, useState
} from 'react'

import "./dropdown_02.css"

import account from "../../assets/account.png"
import down from "../../assets/down.svg"
import moon from "../../assets/moon.svg"

type IconProps = {
    children: ReactNode;
    className?: string;
    iconRef?: RefObject<HTMLSpanElement>;
}

const Icon: FC<IconProps> = ({
    children,
    iconRef, className
}) => (
    <span ref={iconRef} className={`${className!} materials-symbols-outlined`}>
        {children}
    </span>
)

const DropDown_02 = () => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const chevronRef = useRef<HTMLSpanElement>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [menuTop, setMenuTop] = useState<string>();
    const [menuRight, setMenuRight] = useState<string>();

    const handleButtonClick = () => {
        const buttonRect = buttonRef?.current?.getBoundingClientRect();

        const chevronRect = chevronRef?.current?.getBoundingClientRect();

        if (buttonRect && chevronRect && isOpen) {
            const menuRight = buttonRect.right - chevronRect.right;
            const menuTop = chevronRect.top - buttonRect.top;
            setMenuRight(`${menuRight}px`);
            setMenuTop(`${menuTop}px`);
        } else {
            setMenuRight("0px");
            setMenuTop("78px");
        }

        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className={`dropdown ${isOpen ? "open":""}`}>
                <button ref={buttonRef} onClick={handleButtonClick}>
                    <Icon>
                        <img src={account} alt='account' style={{width: 50}} />
                    </Icon>
                    <span>Preferences</span>
                    <Icon iconRef={chevronRef} className="chevron">
                            {isOpen ? <img src={down} />:<img src={down}/>}
                    </Icon>
                </button>
                <div className={`menu ${isOpen ? "open" : ""}`} style={{right: menuRight, top: menuTop}}>
                    <button>
                        <Icon>
                            <img src={moon} alt='moon' style={{width: 30}} />
                        </Icon>
                        <span>Dark Mode</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default DropDown_02