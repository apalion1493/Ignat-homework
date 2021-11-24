import React from 'react'
import {AffairType} from "./HW2";
import style from "./Affairs.module.css";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div>
            <p className={style.text}>{props.affair.name} - </p>
            <span> {props.affair.priority}</span>

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
