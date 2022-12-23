import React from 'react'

export default function SlideImg({ sl, list }) {
    return (
        <div className='slideimg'>
            {list.map((value, index, array) => {
                return <img style={{ width: `${100 / sl}%` }} src={value} />
            })}
        </div>
    )
}
