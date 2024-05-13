import { useRef, useState } from "react"

import "./dropdown_03.css"
import React from "react"

const graphics = [{ name: "Nvidia Graphics", }]

export const DropDown_03 = () => {
    const [isOpen, setIsOpen] = useState("")
    const [search, setSearch] = useState("")

    const inputRef = useRef<HTMLInputElement>(null)

    const handleClick = () => {
        if (!isOpen) {
            inputRef.current?.focus();
        }
        setIsOpen(!Boolean(isOpen) ? "open" : "");
    }

    const handleChange = e => setSearch(e.target.value)

    const filterGraphic = graphics.filter(graphic => search.length && graphic.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className="wrapper">
            <div className={`search $"{isOpen}`}>
                <input ref={inputRef} onChange={handleChange} placeholder="Find a graphics card" type="text" />
                <button onClick={handleClick} className={`uil uil-${isOpen ? "multiply" : "search"}`}></button>
            </div>
            <div className={`items ${isOpen}`}>
                {Boolean(filterGraphic.length) && filterGraphic?.map((graphic, index) => index < 3 && <button key={graphic.name}>
                    {graphic.name}
                </button>)}
            </div>
        </div>
    )
}