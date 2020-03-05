import React from "react";
import s from "./Logo.module.css"

let Logo = () => {
    return (
        <div className={s.logoWrapper}>
            <div className={s.logo}>
                i'm logo
            </div>
        </div>
    );
};

export default Logo;