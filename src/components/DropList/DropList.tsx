import React from 'react'

type DropListPropsType = {
    nameOf: string
    collapsed?: boolean
    one: string
    two: string
    three: string
    four: string
    five: string
}

export function DropList(props: DropListPropsType) {
    // if (props.collapsed === false) {
    return (
        <div>
            <DropListTitle value={props.nameOf} />
            { !props.collapsed && <DropListBody
                one={props.one}
                two={props.two}
                three={props.three}
                four={props.four}
                five={props.five} />}
        </div>
    )
    // } else {
    //     return (
    //         <div>
    //             <DropListTitle value={props.nameOf} />
    //         </div>
    //     )
    // }
}

export type DropListTitlePropsType = {
    value: string
}

export function DropListTitle(props: DropListTitlePropsType) {
    return (
        <><h3>{props.value}</h3></>
    )
}

export type DropListBodyPropsType = {
    one: string
    two: string
    three: string
    four: string
    five: string
}

export function DropListBody(props: DropListBodyPropsType) {
    return (
        <ul>
            <li><i>{props.one}</i></li>
            <li><i>{props.two}</i></li>
            <li><i>{props.three}</i></li>
            <li><i>{props.four}</i></li>
            <li><i>{props.five}</i></li>
        </ul>
    )
}
