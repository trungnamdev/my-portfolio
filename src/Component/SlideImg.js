import React from 'react'

export default function SlideImg({ sl, list,showLightBox }) {
    return (
        <div className='slideimg'>
            {list.map((value, index, array) => {
                return <img onClick={showLightBox} style={{ width: `${100 / sl}%` }} src={value} />
            })}
        </div>
    )
}
