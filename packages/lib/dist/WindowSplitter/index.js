import React, { Fragment } from "react";
import useWindowSplitter from "./useWindowSplitter";
export const WindowSplitter = (props) => {
    const { containerProps, mainPaneProps, splitterProps, secondPaneProps } = useWindowSplitter({
        layout: props.layout,
    });
    return (React.createElement(Fragment, null,
        React.createElement("div", Object.assign({}, containerProps),
            React.createElement("div", Object.assign({}, mainPaneProps), props.children[0]),
            React.createElement("div", Object.assign({}, splitterProps)),
            React.createElement("div", Object.assign({}, secondPaneProps), props.children[1]))));
};
