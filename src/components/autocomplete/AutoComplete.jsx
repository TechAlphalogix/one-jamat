"use client";


import { useState, useEffect, useRef } from "react";

const AutoComplete = ({ options = ["Oranges", "Apples", "Pearls"] }) => {
    const [value, setValue] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const suggestions = options.filter(option => option.toLowerCase().includes(value.toLowerCase()));

    const autocompleteRef = useRef();

    useEffect(() => {
        const handleClick = (event) => {
            if (autocompleteRef.current && !autocompleteRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSuggestionClick = (suggestion) => {
        setValue(suggestion);
        setShowSuggestions(false);
    };

    return (
        <div className="relative w-full">
            <input
                value={value}
                onChange={handleChange}
                placeholder="Search for domain like UX Design, Graphic Design, web dev etc"
                onFocus={() => setShowSuggestions(true)}
                className="bg-white border w-full py-3 px-2 border-gray-400 rounded-lg text-gray-800 focus:outline-none"
                ref={autocompleteRef}
            />
            {showSuggestions && (
                <ul className="absolute z-10 left-0 right-0 mt-2 bg-white border border-gray-400 rounded-lg text-gray-800">
                    {suggestions.map((suggestion) => (
                        <li
                            onClick={() => handleSuggestionClick(suggestion)}
                            key={suggestion}
                            className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AutoComplete;
