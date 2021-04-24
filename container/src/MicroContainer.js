import { useEffect, useRef } from "react";

const MicroContainer = ({ name, host }) => {
    const container = useRef(null);

    useEffect(() => {
        let cancel = false;
        const current = container.current;
        const script = document.createElement('script');
        script.async = true;
        script.onload = () => {
            if (cancel) return;
            window.microFrontends[name].mount(current);
        };

        (async () => {
            const data = await fetch(`${host}asset-manifest.json`);
            const json = await data.json();
            if (cancel) return;
            script.src = `${host}${json.entrypoints[0]}`;
            document.body.appendChild(script);
        })();

        return () => {
            cancel = true;
            if (document.body.contains(script))
                document.body.removeChild(script);
            if (window.microFrontends && window.microFrontends[name])
                window.microFrontends[name].unmount(current);
        };
    }, [name, host]);

    return <div ref={container}></div>;
};

export default MicroContainer;
