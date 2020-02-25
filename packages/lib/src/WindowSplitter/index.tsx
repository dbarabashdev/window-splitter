import React, { Fragment } from "react"
import useWindowSplitter from "./useWindowSplitter"

export const WindowSplitter = (props: any) => {
  const { containerProps, mainPaneProps, splitterProps, secondPaneProps } = useWindowSplitter({
    layout: props.layout,
  })

  return (
    <Fragment>
      {/* 
      // @ts-ignore */}
      <div {...containerProps}>
        <div {...mainPaneProps}>{props.children[0]}</div>
        <div {...splitterProps} />
        <div {...secondPaneProps}>{props.children[1]}</div>
      </div>
    </Fragment>
  )
}
