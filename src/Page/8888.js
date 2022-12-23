import React from 'react'
import '../css/Lygapp.css';
import { Player } from 'video-react';
import SlideImg from '../Component/SlideImg';

export default function QL8888() {
    return (
        <div className='main' style={{ backgroundColor: '#161850' }}>
            <p className='td'>HỆ THỐNG QUẢN LÝ HỌC TẬP
LEARNING MANAGEMENT SYSTEM </p>
            <p className='detailtt'>
                <span>Trong dự án sử dụng :</span> PHP, MySQL, Cloudinary, Firebase ( Realtime Database ), Electronjs (webview), React Native (webview), Twilio, PHPmailer.
            </p>
            <p className='detailtt'>
                <span>Các chức năng nổi bật :</span> Chat realtime, lưu trữ đám mây, thanh toán VNPAY...
            </p>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d7a94b136542111.61fb5ac228a2b.png" />
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/97d6ea136542111.61fb5ac22b1dd.png" />
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/eda88f136542111.61fb5ac22a83b.png" />
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6a4475136542111.61fb5ac22943b.png" />
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/360f4e136542111.61fb5ac229e6b.png" />
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/80cf2f136542111.61fb5ac227740.png" />
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c4ed42136542111.61fb5ac2281de.png" />
            <SlideImg sl={3} list={[
                'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c8bdd0136542111.61fb5ac14e955.png',
                'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aea41f136542111.61fb5ac14fbd8.png',
                'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2d18fe136542111.61fb5ac14f453.png'
                
            ]}/>
             <SlideImg sl={3} list={[
                'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a4ff1a136542111.61fb5ac1bbba4.png',
                'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8c8930136542111.61fb5ac1bc13c.png',
                'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/68da3f136542111.61fb5ac1bb66a.png'
            ]}/>
        
        
        </div>
    )
}
