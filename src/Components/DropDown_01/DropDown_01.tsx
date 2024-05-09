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

    return(
        <div ref={ref} className={`dropdown ${isOpen ? "open": ""}`}>
            <button onClick={() => setIsOpen(!isOpen)}>
                <Icon>account_circle</Icon>
                <span>James Bond</span>
                <Icon>
                    {isOpen? "close" : "expand_more"}
                </Icon>
            </button>
            <div className="menu">
                <button>
                    <Icon>person</Icon>
                    <span>Profile</span>
                </button>
            </div>
        </div>
    )
}