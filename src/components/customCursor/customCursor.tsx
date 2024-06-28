import { useEffect, useState } from "react";

function CustomCursor() {
    const [xPos, setXPos] = useState(0);
    const [yPos, setYPos] = useState(0);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setXPos(event.clientX);
            setYPos(event.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            className="custom-cursor"
            style={{ left: `${xPos - 30}px`, top: `${yPos - 30}px` }}
        ></div>
    );
}

export default CustomCursor;
