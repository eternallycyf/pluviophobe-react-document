import React, { useState } from 'react'
import { Card, Divider, Empty } from 'antd'
import { Icon } from 'pluviophobe-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
/**
 * @param {string} cardTitle card组件的左上角
 * @param {ReactNode} cardExtra card组件右上角
 * @param {ReactNode} content 组件
 * @param {string} descriptionTitle 分割线上的描述文本
 * @param {ReactNode} description 分割线下的描述内容
 * @param {string} code 代码块
 */
const RcCard = (props) => {
  const {
    content = "",
    descriptionTitle = "",
    description = "",
    code = "",
    cardTitle = "",
    cardExtra = ""
  } = props
  const [state, setState] = useState(false)

  const copyCode = () => {
    navigator.clipboard.writeText(code)
  }
  const renderContent = () => {
    if (content) {
      if (typeof content == 'string') {
        return (
          <SyntaxHighlighter showLineNumbers language="javascript" style={dracula}>
            {content.toString()}
          </SyntaxHighlighter>
        )
      } else {
        return content
      }
    } else {
      return <Empty />
    }
  }

  return (
    <>
      <Card title={cardTitle} extra={cardExtra}>
        {renderContent(content)}
        <Divider orientation="left">{descriptionTitle ?? ''}</Divider>
        <div>{description ?? ''} </div>
        {/* 下方的按钮 */}
        <div className={'pl-card-icon-box'}>
          <div className={'pl-card-icon'}>
            <Icon icon='copy' onClick={() => copyCode()} />
          </div>
          <div className={'pl-card-icon'} onClick={() => setState(!state)} className={'pl-card-icon'}>
            <Icon icon='code' />
          </div>

        </div>
        {/* 填充代码 */}
        {
          <Card className={'codeCard'} style={{ display: `${state ? 'block' : "none"}`, padding: "0px 0px" }}>
            <SyntaxHighlighter showLineNumbers language="javascript" style={dracula}>
              {`${code.toString()}`}
            </SyntaxHighlighter>
          </Card>
        }
      </Card >
    </>
  )
}

export default RcCard
