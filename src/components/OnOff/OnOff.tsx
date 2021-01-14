import React, { useState } from 'react'
import OnOffClasses from './OnOff.module.css'

type OnOffPropsType = {
    // status: boolean
}

// export function OnOff(props: OnOffPropsType) {
//     return (
//         <div className={OnOffClasses.block}>
//             {props.status && <button className={OnOffClasses.on}>ON</button>}
//             {!props.status && <button className={OnOffClasses.off}>OFF</button>}
//             {props.status && <div className={OnOffClasses.circleGreen}></div>}
//             {!props.status && <div className={OnOffClasses.circleRed}></div>}
//         </div>
//     )
// }

// Инлайн стили реакт

export function OnOff(props: OnOffPropsType) {

    console.log('OnOff rendered');

    let [on, setOn] = useState(false) // hook useState

    const onStyle = {
        // textAlign: 'center',
        width: '40px',
        height: '20px',
        backgroundColor: on ? 'greenyellow' : 'white',
        border: '1px dotted black',
        padding: '2px'
    }
    const offStyle = {
        // textAlign: 'center',
        width: '40px',
        height: '20px',
        backgroundColor: on ? 'white' : 'fuchsia',
        border: '1px dotted black',
        padding: '2px'
    }
    const indicatorStyle = {
        borderRadius: '50%',
        width: '20px',
        height: '20px',
        border: '1px solid black',
        backgroundColor: on ? 'greenyellow' : 'fuchsia',
    }
    const containerStyle = {
        display: 'flex',
        width: '200px',
        justifyContent: 'space-around'

    }

    return (
        <div style={containerStyle}>
            <div style={onStyle} onClick={() => {
                setOn(true)
                // console.log('Нажал на ДА');
            }}>ON</div>
            <div style={offStyle} onClick={() => {
                setOn(false)
                // console.log('Нажал на нет');
            }}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}