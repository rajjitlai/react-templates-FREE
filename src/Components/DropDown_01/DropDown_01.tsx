import React, {
    FC,
    MouseEventHandler,
    PropsWithChildren,
    RefObject,
    useEffect,
    useRef,
    useState
} from "react"

import "./dropdown_01.css"

import close from "../../assets/close.svg"
import dropdown from "../../assets/dropdown.png"
import account from "../../assets/account.png"

const Icon: FC<PropsWithChildren> = ({ children }) => <i className="material-symbols-outlined">{children}</i>

const useOnClickOutside = (
    ref: RefObject<HTMLDivElement>,
    handler: MouseEventHandler<HTMLButtonElement>
) => {
    useEffect(() => {
        const listener = (event: any) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener("mousedown", listener);

        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
}

export const DropDown_01 = () => {
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null)
    useOnClickOutside(ref, () => setIsOpen(false))

    return (
        <div ref={ref} className={`dropdown ${isOpen ? "open" : ""}`}>
            <button onClick={() => setIsOpen(!isOpen)}>
                <Icon><img src={account} width="45px" /></Icon>
                <span>James Bond</span>
                <Icon>
                    {isOpen ? <img src={close} alt="close" /> : <img src={dropdown} alt="dropdown" width="30px" />}
                </Icon>
            </button>
            <div className="menu">
                <button>
                    <Icon><img src={account} width="45px" /></Icon>
                    <span>Profile</span>
                </button>
            </div>
        </div>
    )
}