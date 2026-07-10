import React from "react";

const Button = ({ title, backgroundcolor }) => {
    return (
        <button
            className={`rounded-full px-10 py-2 font-medium border-4 border-[#00b934] text-black transition-all duration-300 hover:bg-[#00b934] hover:text-white active:bg-[#00b934] active:text-white hover:border-white active:border-white ${backgroundcolor || "bg-white"}`}
        >
            {title}
        </button>
    );
};

export default Button;