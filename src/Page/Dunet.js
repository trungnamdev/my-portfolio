import React from 'react'
import '../css/Lygapp.css';
import { Player } from 'video-react';

export default function Dunet({showLightBox}) {
    return (
        <div className='main' style={{ backgroundColor: '#181A20' }}>
            <p className='td'>Dunet - Cổng donate cho streamer</p>
            <p className='detailtt'>
                <span>Công nghệ sử dụng :</span> Laravel, Mysql, Pusher ...
            </p>
            <p className='gioithieu'>Streamer sẽ nhận được mã khóa dùng để hiển thị người donate trong thời gian thực của mình khi đăng ký thành công. (vd : c4ca4238a0b923820dcc509a6f75849b)</p>
            <p className='gioithieu'>Người dùng khi tiến hành donate và thanh toán thành công trên trên live sẽ hiện tên, số tiền, lời nhắn trực tiếp trong thời gian thực.</p>
            <div class="iframe-container">
                <iframe style={{ border: "none", outline: 'none' }} allowfullscreen src="https://www-ccv.adobe.io/v1/player/ccv/PAIYaVbTAez/embed?api_key=behance1&bgcolor=%23191919"></iframe>
            </div>
            <img onClick={showLightBox} src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1b52dc159641421.63a2cca9d6bff.jpg' />
            <img onClick={showLightBox} src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7f923c159641421.63a2cca9d792a.jpg' />
            <img onClick={showLightBox} src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e68754159641421.63a2cca9d8630.jpg' />
            <img onClick={showLightBox} src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f3b9e9159641421.63a2cca9d5e83.jpg' />
        </div>
    )
}
