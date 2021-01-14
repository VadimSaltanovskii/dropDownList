import React from 'react'
import OnOffClasses from './OnOff.module.css'

type OnOffPropsType = {
    status: boolean
}

export function OnOff(props: OnOffPropsType) {
    return (
        <div className={OnOffClasses.block}>
            {props.status && <button className={OnOffClasses.on}>ON</button>}
            {!props.status && <button className={OnOffClasses.off}>OFF</button>}
            {props.status && <div className={OnOffClasses.circleGreen}></div>}
            {!props.status && <div className={OnOffClasses.circleRed}></div>}
        </div>
    )
}

