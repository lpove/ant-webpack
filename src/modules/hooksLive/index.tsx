import React, { useEffect, useState } from "react";

const HooksLive: React.FC<{ title?: string }> = (props) => {
    // useEffect(() => {
    //     // document.title && document.title  = props.title;
    // });

    // const [array, setArt] = useState([]);

    const [count, setCount] = useState(0);
    useEffect(() => {
        const id = setInterval(() => {
            setCount(count + 1);
        }, 1000);

        return () => clearInterval(id);
    }, [count]);

    return <div>Hooks Live{count}</div>;
};

export default HooksLive;
