import { useRef, useState } from 'react'
import "./dropdown_05.css"
import chevron_right from "../../assets/chevron_right.svg"
import arrow_back from "../../assets/arrow_back.svg"

const items = [
    {
        name: "build",
        subItems: [
            "description",
            "folder"
        ],
    },
]

const MenuButton = ({
    name,
    icon,
    index,
    hasSubItems,
    subMenuHeight,
    onClick,
}) => {
    return (
        <button onClick={() => onClick ? onClick(index, subMenuHeight) : null}>
            <span>{icon ? <img src={icon} alt="icon" /> : name}</span>
            {name}
            {hasSubItems && <span><img src={chevron_right} alt="chevron" /></span>}
        </button>
    )
}

const MenuItem = ({
    name,
    index,
    activeSubMenu,
    subItems,
    onClick,
}) => {
    const subMenuRef = useRef(null);
    const isActive = activeSubMenu === index
    return (
        <>
            <MenuButton onClick={subItems ? onClick : () => null} name={name} index={index} hasSubItems={Boolean(subItems)} subMenuHeight={subMenuRef.current?.clientHeight} />
            {subItems?.length && (
                <nav ref={subMenuRef} className={`sub-menu ${isActive ? "open" : ""}`}>
                    <MenuButton onClick={onClick} icon={arrow_back} name={name} />
                    {subItems.map((subItem) => (
                        <MenuButton key={subItem} name={subItem} />
                    ))}
                </nav>
            )}
        </>
    )
}

const DropDown_05 = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
    const [subMenuHeight, setSubMenuHeight] = useState()
    const [activeSubMenu, setActiveSubMenu] = useState()
    const handleClick = (index, subMenuHeight) => {
        if (index > -1)
            setActiveSubMenu(index)
        setSubMenuHeight(subMenuHeight)
        setIsSubMenuOpen(index > -1)
    }

    return (
        <div className={`dropdown ${isOpen ? 'open' : ''}`}>
            <button onClick={() => setIsOpen(!isOpen)}>
                Preferences
            </button>

            <div style={{ height: `${subMenuHeight || 168}px` }} className='menu'>
                <div className={`menu-inner ${isSubMenuOpen ? 'open' : ''}`}>
                    <nav className='main-menu'>
                        {items.map((item, index) => (
                            <MenuItem key={item.name} name={item.name} index={index} activeSubMenu={activeSubMenu} subItems={item.subItems} onClick={handleClick} />
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default DropDown_05