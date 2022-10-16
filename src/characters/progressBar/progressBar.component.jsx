import React from 'react'

export const ProgressBar = ({bgcolor,max,min}) => {
    const progress = Math.floor((min/max)*100);
    const ParentDiv={
        width:'90%',
        backgroundColor: 'whitesmoke',
        borderRadius: '0.6rem',
        height: '1.1rem',
        margin:'0.2rem',
        border: '1px solid black'
    }
    const ChildDiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius:'0.5rem',
        transition: 'width 0.5s easy-in-out',
        textAlign:'center'
    }
    const progresstext = {
        color: 'black',
        fontWeight: 900
    }
  return (
    <div style={ParentDiv}>
        <div style={ChildDiv}>
            <span style={progresstext}>{`${min}/${max}`}</span>
        </div>
    </div>
  )
}
