import React from 'react'

export const PropsComponent = (props) => {
    console.log(props)
    return (
        <div>PropsComponent name is: {props.name}</div>
    )
}
