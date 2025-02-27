import React from 'react'
import styled from 'styled-components'

export type Props = {
    showHeader?: boolean
    loading?: boolean
}

const Container = styled.div`
height:56px;
padding:0px;
background-color:#ffffff;
box-shadow:0px 1px 0px rgba(0, 0, 0, 0.07999999821186066);
position:absolute;
top: 0px;
left: 0px;
right: 0px;
z-index: 10;
display: flex;
align-items: center;

`

const ChatTitle = styled.div`
text-align:center;
vertical-align:text-top;
font-size:16px;
line-height:auto;
color:#000000;
position:absolute;
width: 100%;
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

`
const HeaderPlaceholder = styled.div`
   background-color: #ffffff;
     height: 56px;
      position: absolute;
      top: 0px;
left: 0px;
right: 0px;
z-index: 10;
box-sizing: border-box;
`

export default function ConversationHeader({ loading, showHeader=true }: Props) {
    return (
        loading ?
            <div />
            :
            (!showHeader ?
                <HeaderPlaceholder />
                :
                <Container>

                    <ChatTitle
                    >Messages</ChatTitle>

                </Container>
            )
    )
}