import { useEffect, useRef } from "react";

const MicroContainer = ({ name, host }) => {
    const container = useRef(null);

    useEffect(() => {
        const current = container.current;
        const script = document.createElement('script');
        script.onload = () => window.microFrontends[name].mount(current);
        script.async = true;

        (async() => {
            const data = await fetch(`${host}asset-manifest.json`);
            const json = await data.json();
            script.src = `${host}${json.entrypoints[0]}`;
            document.body.appendChild(script);
        })();

        return () => {
            window.microFrontends[name].unmount(current);
            document.body.removeChild(script);
        };
    }, [name, host]);

    return <div ref={container}></div>;
};

export default MicroContainer;
