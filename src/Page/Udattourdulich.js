import React from 'react'
import SlideImg from '../Component/SlideImg';
import '../css/Lygapp.css';

export default function Udattourdulich({ showLightBox }) {
    return (
        <div className='main' style={{ backgroundColor: '#414A58' }}>
            <p className='td'>ỨNG DỤNG ĐẶT TOUR DU LỊCH<br></br>
                TRAVEL BOOKING APP</p>
            <p className='detailtt'>
                <span>Công nghệ sử dụng :</span> React Native, Expo, QR Scaner, AsyncStorage,...
            </p>
            <p className='detailtt'>
                <span>API : :</span> PHP, Laravel, Mysql, Passport Auth...
            </p>
            <p className='gioithieu'>Ứng dụng cho phép người dùng đăng nhập và lưu phiên đăng nhập, tìm kiếm và đặt vé du lịch, quản lý và check-in vé bằng mã qr, về bên quản lý sẽ có trình quét qr kiểm tra vé có hợp lệ...</p>
            <img onClick={showLightBox} src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2b049c136545111.61fb6d82e1e69.png' />
            <div className='slideimg'>
                <img onClick={showLightBox} style={{ width: `${100 / 3}%` }} src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/3c1229136545111.61fb6d8222c4a.jpg' />
                <img onClick={showLightBox} style={{ width: `${100 / 3}%` }} src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/88be77136545111.61fb6d8223410.jpg' />
                <img onClick={showLightBox} style={{ width: `${100 / 3}%` }} src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1f0567136545111.61fb6d8223ae7.jpg' />

            </div>

            <SlideImg sl={5} list={
                [
                    "https://mir-s3-cdn-cf.behance.net/project_modules/1400/3eeda0136545111.61fb6d82854a8.jpg",
                    "https://mir-s3-cdn-cf.behance.net/project_modules/1400/346238136545111.61fb6d8286ab0.jpg",
                    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1bdf43136545111.61fb6d8284769.jpg",
                    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/eaac90136545111.61fb6d82872ad.jpg",
                    "https://mir-s3-cdn-cf.behance.net/project_modules/1400/2de1ba136545111.61fb6d8285f34.jpg"
                ]
            } showLightBox={showLightBox} />


        </div>
    )
}
