import React, { useState } from 'react'
import { DropListTitle } from '../../components/DropList/DropList'
import { DropListBody } from '../../components/DropList/DropList'

type DropListAutoPropsType = {
    title: string
    one: string
    two: string
    three: string
    four: string
    five: string
}
export function DropListAuto(props: DropListAutoPropsType) {
    let [kukozha, setKukozha] = useState(true)

    return kukozha ?
        <div>
            <DropListTitle value={props.title} />
            <button onClick={() => {
                kukozha ? setKukozha(false) : setKukozha(true)
            }}>
                Kukozha
            </button>
        </div> :
        <div>
            <DropListTitle value={props.title} />
            <DropListBody
                one={props.one}
                two={props.two}
                three={props.three}
                four={props.four}
                five={props.five} />
            <button onClick={() => {
                kukozha ? setKukozha(false) : setKukozha(true)
            }}>
                Kukozha
        </button>
        </div>
}
