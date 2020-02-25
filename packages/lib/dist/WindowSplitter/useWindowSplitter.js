import React, { useEffect } from "react";
import { SPLITTER_CLASSNAME } from "./constants";
import { constantContainerStyle, constantMainPaneStyle, division, constantSecondPaneStyle } from "./styles";
function useWindowSplitter(options) {
    const [size, setSize] = React.useState(0);
    const ref = React.useRef(null);
    const closed = React.useRef(true);
    const unclosed = (e) => e.target.className === SPLITTER_CLASSNAME && (closed.current = false);
    const close = () => (closed.current = true);
    const onMouseMove = (e) => {
        if (closed.current) {
            return;
        }
        setSize(size + e.movementX);
    };
    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect(); // returns the size of an element and its position relative to the viewport.
            const widthInit = rect.width / 2;
            setSize(widthInit);
        }
    }, [options.layout]);
    let containerStyle, mainPaneStyle, divisionStyle, secondPaneStyle;
    mainPaneStyle = {
        width: size,
        height: "100%",
        ...constantMainPaneStyle,
    };
    divisionStyle = {
        width: 10,
        height: "100%",
        cursor: "col-resize",
        ...division,
    };
    containerStyle = { flexDirection: "row", ...constantContainerStyle };
    secondPaneStyle = constantSecondPaneStyle;
    return {
        containerProps: {
            onMouseDown: unclosed,
            onMouseUp: close,
            onMouseLeave: close,
            onMouseMove,
            ref: ref,
            style: containerStyle,
        },
        mainPaneProps: { style: mainPaneStyle },
        splitterProps: { style: divisionStyle, className: SPLITTER_CLASSNAME },
        secondPaneProps: { style: secondPaneStyle },
    };
}
export default useWindowSplitter;
