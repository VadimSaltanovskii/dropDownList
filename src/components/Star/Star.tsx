import React from 'react'

type StarPropsType = {
  selected: true | false
  //selected: boolean
}

export function Star(props: StarPropsType) {
  return props.selected === true ? <span>★ </span> : <span>☆ </span>
}