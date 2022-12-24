import React from 'react'
import '../css/Lygapp.css';

export default function TinderFS({ showLightBox }) {
    return (
        <div className='main' style={{ backgroundColor: '#7E0986' }}>
            <p className='td'>WEBSTIE HẸN HÒ CHO TRƯỜNG HỌC<br></br>
                WEBSITE TINDER FOR SCHOOL</p>
            <p className='detailtt'>
                <span>Công nghệ sử dụng :</span>PHP, Blade template, Laravel, Socialite, Firebase, Auth...
            </p>
            <p className='detailtt'>
                <span>Chức năng nổi bật :</span> Chỉ cho đăng ký đăng nhập bằng gmail của của trường, thích hoặc không bằng cách kéo vuốt, tích hợp icon vào chat, chat nhóm và riêng tư khi cả 2 đều thích.
            </p>
            <div class="iframe-container">
            <iframe style={{border:"none",outline:'none'}} allowfullscreen src="https://www-ccv.adobe.io/v1/player/ccv/-gRgdNm52cf/embed?api_key=behance1&bgcolor=%23191919"></iframe>
            </div>
            <img onClick={showLightBox} src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/615a55136543239.61fb624f949e7.png' />
            <img onClick={showLightBox} src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3ace23136543239.61fb624f9418b.png' />
            <img onClick={showLightBox} src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7554f2136543239.61fb624f93906.png' />
            <img onClick={showLightBox} src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e9ae18136543239.61fb624f92e52.png' />
        </div>
    )
}
