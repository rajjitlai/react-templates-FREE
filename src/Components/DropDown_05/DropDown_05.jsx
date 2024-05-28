import { useRef, useState } from 'react'
import "./dropdown_05.css"

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
        <button onClick={() => onClick ? onClick(index, subMenuHeight): null}>
            <span>{icon || name}</span>
            {name}
            {hasSubItems && <span>chevron_right</span>}
        </button>
    )
}

const DropDown_05 = () => {
    return (
        <div>DropDown_05</div>
    )
}

export default DropDown_05