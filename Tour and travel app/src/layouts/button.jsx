import React from "react";

const Button = (props) => {
    return (
        <div>
            <button classname={'${props.backgroundcolor} text-black rounded-full px-8 font-medium hover:bg-[8482ff] hover:text-white active:bg-[#8482ff] active:text-white transition all duration-300'}>
                {props.title}
            </button>
        </div>
    )
};

export default Button;