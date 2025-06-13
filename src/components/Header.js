import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = ({ title }) => {

    const { currentTheme, handleTheme } = useContext(ThemeContext)

    return <div className={`py-12 mx-auto w-full bg-[${currentTheme === 'dark' ? '#f8fafc' : '#1e293b'}]`}>

        {/* button toggling theme */}
        <div className="flex justify-around">
            <h2 className={`font-semibold text-lg text-[${currentTheme === 'dark' ? '#020617' : '#f8fafc'}]`}>This is {title} </h2>

            <button className={`pointer text-[${currentTheme === 'dark' ? '#020617' : '#f8fafc'}]`} onClick={handleTheme}>{currentTheme === 'dark' ? <i class="fa-solid fa-moon"></i> : <i class="fa-solid fa-sun"></i>}</button>

        </div>

    </div>
}

export default Header;