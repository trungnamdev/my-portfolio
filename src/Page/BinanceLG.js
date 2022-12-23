import React from 'react'
import '../css/Lygapp.css';
import { Player } from 'video-react';

export default function BinanceLG() {
    return (
        <div className='main' style={{ backgroundColor: '#181A20' }}>
            <p className='td'>Binance login with QR</p>
            <p className='detailtt'>
                <span>Công nghệ sử dụng :</span> React Native, Laravel,...
            </p>
            <p className='gioithieu'>Đăng nhập không sử dụng mật khẩu người dùng sau khi đăng nhập trên thiết bị di động có thể quét mã qr để đăng nhập trực tiếp mà không cần nhập tài khoản mật khẩu</p>
            <div class="iframe-container">
            <iframe style={{border:"none",outline:'none'}} allowfullscreen src="https://www-ccv.adobe.io/v1/player/ccv/-aWY36UNb5u/embed?api_key=behance1&bgcolor=%23191919"></iframe>
            </div>
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/46ffc2159387565.639d2d3a2c6ae.png' />
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7e2775159387565.639d2d3a2dcba.png' />
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a6d297159387565.639d2d3a2d1b8.png' />

            <div className='slideimg'>
                <img style={{ width: `${100 / 2}%` }} src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/bcd5a7159387565.639d2d39cd2eb.jpg' />
                <img style={{ width: `${100 / 2}%` }} src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/a94adb159387565.639d2d39cde42.jpg' />
            </div>
        </div>
    )
}
