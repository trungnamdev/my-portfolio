import React from 'react'
import '../css/Lygapp.css';
import { Player } from 'video-react';
import SlideImg from '../Component/SlideImg';

export default function QL8888({showLightBox}) {
    return (
        <div className='main' style={{ backgroundColor: '#161850' }}>
            <p className='td'>HỆ THỐNG QUẢN LÝ HỌC TẬP<br></br>
LEARNING MANAGEMENT SYSTEM </p>
            <p className='detailtt'>
                <span>Trong dự án sử dụng :</span> PHP, MySQL, Cloudinary, Firebase ( Realtime Database ), Electronjs (webview), React Native (webview), Twilio, PHPmailer.
            </p>
            <p className='detailtt'>
                <span>Các chức năng nổi bật :</span> Chat realtime, lưu trữ đám mây, thanh toán VNPAY...
            </p>
            <p className='gioithieu'>
                Giảng viên : Giao bài tập, chấm bài tập trực tiếp trên hệ thống, xem lớp dạy, sinh viên,... <br></br><br></br>
                Sinh viên: Nộp bài tập, xem lớp học, bài tập,điểm số... <br></br><br></br>
                Quản lý: Quản lý sinh viên, giảng viên, tạo lớp học,...<br></br><br></br>
                * Mọi hình ảnh và file nộp bài tập được lưu trữ trên cloud
            </p>
            <img onClick={showLightBox} src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d7a94b136542111.61fb5ac228a2b.png" />
            <img onClick={showLightBox} src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/97d6ea136542111.61fb5ac22b1dd.png" />
            <img onClick={showLightBox} src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/eda88f136542111.61fb5ac22a83b.png" />
            <img onClick={showLightBox} src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6a4475136542111.61fb5ac22943b.png" />
            <img onClick={showLightBox} src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/360f4e136542111.61fb5ac229e6b.png" />
            <img onClick={showLightBox} src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/80cf2f136542111.61fb5ac227740.png" />
            <img onClick={showLightBox} src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c4ed42136542111.61fb5ac2281de.png" />
            <SlideImg sl={3} list={[
                'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c8bdd0136542111.61fb5ac14e955.png',
                'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aea41f136542111.61fb5ac14fbd8.png',
                'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2d18fe136542111.61fb5ac14f453.png'
                
            ]} showLightBox={showLightBox}/>
             <SlideImg sl={3} list={[
                'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a4ff1a136542111.61fb5ac1bbba4.png',
                'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8c8930136542111.61fb5ac1bc13c.png',
                'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/68da3f136542111.61fb5ac1bb66a.png'
            ]} showLightBox={showLightBox}/>
        
        
        </div>
    )
}
