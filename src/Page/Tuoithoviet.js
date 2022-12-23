import React from 'react'
import SlideImg from '../Component/SlideImg';
import '../css/Lygapp.css';

export default function Tuoithoviet({showLightBox}) {
    return (
        <div className='main' style={{ backgroundColor: '#085C78', color: 'white' }}>
            <p className='td'>WEBSITE TUỔI THƠ VIỆT
                SAIGON'S GAME</p>
            <p className='detailtt'>
                <span>Công nghệ sử dụng :</span> PHP, MySQL, Laravel, Pusher realtime, Auth...
            </p>
            <p className='detailtt'>
                <span>Chức năng nổi bật :</span> Một số game của việt nam như búa kéo bao, bầu cua,...
            </p>
            <div class="iframe-container">
                <iframe style={{ border: "none", outline: 'none' }} allowfullscreen src="https://www-ccv.adobe.io/v1/player/ccv/GRe8DXhN5Rh/embed?api_key=behance1&bgcolor=%23191919"></iframe>
            </div>
            <img onClick={showLightBox} src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/76edd2136542883.61fb602fc8bb6.jpg' />
            <img onClick={showLightBox} src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/300cfb136542883.61fb602fc9377.jpg' />
            <img onClick={showLightBox} src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ede1ff136542883.61fb602fc8593.jpg' />
        </div>
    )
}
