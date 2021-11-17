import React, { useState } from 'react'
import './index.less'
/**
 * @param {string} type 样式类型 
 * default 黑色背景 紫色字体 无边框
 * link  没有背景色 没有边框
 * black 黑色背景框 黑色字体
 * @param {string} className 类名 
 * @param {style} sylte 总体样式
 * @param {ReactNode} children 
 * @return {ReactNode} 
 */
const Code = ({
  type = 'default',
  className = "link",
  children = null,
  style = {},
  ...restProps
}) => {

  const classes = `${type}-Code ${className}`

  return (
    <code
      className={classes}
      style={style}
      {...restProps}
    >
      {children}
    </code>
  )
}

export default Code
