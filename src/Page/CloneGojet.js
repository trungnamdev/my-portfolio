import React from 'react'
import '../css/Lygapp.css';
import { Player } from 'video-react';

export default function CloneGojet({showLightBox}) {
    return (
        <div className='main' style={{ backgroundColor: 'white',color:'black' }}>
            <p className='td'>Gojek Clone UI</p>
            <p className='detailtt'>
                <span>Công nghệ sử dụng :</span> React Native, Gojek API,...
            </p>
            <p className='detailtt'>
                <span>Hỗ trợ :</span> Android & IOS
            </p>
            <div class="iframe-container">
            <iframe style={{border:"none",outline:'none'}} allowfullscreen src="https://www-ccv.adobe.io/v1/player/ccv/BBc8GcutA7f/embed?api_key=behance1&bgcolor=%23191919"></iframe>
            </div>
            <img onClick={showLightBox} src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/cf7570164611163.63f9879c86c12.png' />
        </div>
    )
}
