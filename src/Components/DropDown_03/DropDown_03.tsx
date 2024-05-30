import { useRef, useState } from "react";
import "./dropdown_03.css";
import React from "react";

const graphics = [{ name: "Nvidia Graphics" }];

const DropDown_03 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");

    const inputRef = useRef(null);

    const handleClick = () => {
        if (!isOpen) {
            inputRef.current?.focus();
        }
        setIsOpen(!isOpen);
    };

    const handleChange = (e) => setSearch(e.target.value);

    const filterGraphic = graphics.filter(
        (graphic) =>
            search.length && graphic.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="wrapper">
            <div className={`search ${isOpen ? "open" : ""}`}>
                <input
                    ref={inputRef}
                    onChange={handleChange}
                    placeholder="Find a graphics card"
                    type="text"
                />
                <button onClick={handleClick} className={`uil uil-${isOpen ? "multiply" : "search"}`}></button>
            </div>
            <div className={`items ${isOpen ? "open" : ""}`}>
                {filterGraphic.length > 0 &&
                    filterGraphic.slice(0, 3).map((graphic) => (
                        <button key={graphic.name}>{graphic.name}</button>
                    ))}
            </div>
        </div>
    );
};

export default DropDown_03;
