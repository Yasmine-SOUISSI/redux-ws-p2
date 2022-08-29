import React from "react";

export default function Button({ textButton, className, onClick, type }) {
    return (
        <button className={className} onClick={onClick} type={type}>
            {textButton}
        </button>
    );
}
