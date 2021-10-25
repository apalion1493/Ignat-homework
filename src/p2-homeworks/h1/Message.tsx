import React from 'react'
import s from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={s.message}>
            <img className={s.avatar} src={props.avatar} alt=""/>
            <div className={s.wrapper}>
                <span className={s.name}>{props.name}</span>
                <div className={s.content}>
                    <p className={s.text}>{props.message}</p>
                    <span className={s.time}>{props.time}</span>
                </div>
            </div>
        </div>
    )
}

export default Message
