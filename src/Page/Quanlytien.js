import React from 'react'
import SlideImg from '../Component/SlideImg';
import '../css/Lygapp.css';

export default function Quanlytien({showLightBox}) {
    return (
        <div className='main' style={{ backgroundColor: 'white',color:'black' }}>
            <p className='td'>ỨNG DỤNG QUẢN LÝ TIỀN 
MONEY MANAGEMENT</p>
            <p className='detailtt'>
                <span>Công nghệ sử dụng :</span> React Native, Expo, SqLite,....
            </p>
            <p className='gioithieu'>Ứng dụng dùng quản lý thu chi hiệu quả hơn, sử dụng sqlite giúp có thể sử dụng ngay cả khi không có mạng, vì những ứng dụng hiện tại có quá nhiều quảng cáo nên đã tự tạo để sử dụng.</p>
            <strong><p className='gioithieu'>* App đầu tiên sau khi tự học React Native</p></strong>
            <img onClick={showLightBox} src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/777c19136544603.61fb6a5941356.png' />
        </div>
    )
}
