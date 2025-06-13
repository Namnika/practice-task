import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Content() {

    const { currentTheme, handleTheme } = useContext(ThemeContext);

    return <div className={`px-32 py-12 bg-[${currentTheme === 'light' ? '#1e293b' : '#f8fafc'}]`}>
        <p className={`text-[${currentTheme === 'light' ? '#f1f5f9' : '#0f172a'}]`}>
            Nostrud ut commodo irure nulla non sunt culpa cillum. Consectetur reprehenderit do consequat dolor proident cillum dolore consequat aliqua tempor Lorem sit sit. Cillum irure do adipisicing laborum esse cillum labore proident exercitation consequat ullamco aliquip. Deserunt cillum do culpa nisi irure.

            Ullamco culpa ipsum labore velit id Lorem adipisicing. Labore pariatur nisi ut sunt do consectetur sunt velit nostrud adipisicing amet aute laboris. Officia aliquip ullamco id cupidatat in mollit reprehenderit culpa fugiat qui consectetur irure ea pariatur.

            Amet enim anim dolor do eiusmod consectetur consectetur est consequat dolor. Deserunt proident irure tempor non nulla. Labore nulla eiusmod proident occaecat aute sunt exercitation ullamco non laboris dolor nostrud ipsum eu.</p>
    </div>
}