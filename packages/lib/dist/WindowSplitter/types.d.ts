/// <reference types="react" />
declare type WindowSplitterTypes = {
    containerProps: {
        onMouseDown: (e: any) => false;
        onMouseUp: () => boolean;
        onMouseLeave: () => boolean;
        onMouseMove: (e: any) => void;
        ref: React.MutableRefObject<any>;
        style: {
            display: string;
            height: string;
            overflow: string;
            flexDirection: string;
        };
    };
    mainPaneProps: {
        style: {
            overflow: string;
            width: number;
            height: string;
        };
    };
    splitterProps: {
        style: {
            background: string;
            width: number;
            height: string;
            cursor: string;
        };
        className: string;
    };
    secondPaneProps: {
        style: {
            flexGrow: number;
            overflow: string;
            flex: string;
        };
    };
};
export default WindowSplitterTypes;
