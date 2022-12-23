import React from 'react'
import '../css/Lygapp.css';

export default function LYGAPP({showLightBox}) {
  return (
    <div className='main' style={{ backgroundColor: '#366C9C' }}>
      <p className='td'>ỨNG DỤNG NỘI BỘ DOANH NGHIỆP
        LYG APP</p>
        <p className='detailtt'>
            <span>Công nghệ sử dụng :</span> React Native, Expo, Nodejs,...
        </p>
        <p className='detailtt'>
            <span>Nền tảng hổ trợ :</span> Android, IOS
        </p>
        <p className='detailtt'>
            <span>Số lượng người dùng :</span> > 40.000 người
        </p>
        <p className='detailtt'>
            <span>Số lượng nhà máy trong tập đoàn đang sử dụng :</span> 8
        </p>
        <p className='detailtt'>
            <span>Thành tựu :</span> Đạt top 5 ứng dụng doanh nghiệp miễn phí nổi bật
        </p>
        <p className='detailtt'>
            <span>Số lượng thành viên nhóm phát triển :</span> 2
        </p>
        <p className='gioithieu'>Ứng dụng nội bộ doanh nghiệp giúp nhân viên trong tập đoàn LY xem lương, ngày nghỉ, tăng ca, sổ tay lao động, nhận thông báo nhà máy,...</p>
      <img onClick={showLightBox} src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b27b28153499583.633e4779709b5.png' />
      <div className='slideimg'>
        <img onClick={showLightBox} style={{width: `${100/8}%`,}} src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c6cd0f153499583.63315b2667158.png'/>
        <img onClick={showLightBox} style={{width: `${100/8}%`,}} src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3f2860153499583.63315b2661543.png'/>
        <img onClick={showLightBox} style={{width: `${100/8}%`,}} src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a6f692153499583.63315b2666748.png'/>
        <img onClick={showLightBox} style={{width: `${100/8}%`,}} src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9c485e153499583.63315b2662ddc.png'/>
        <img onClick={showLightBox} style={{width: `${100/8}%`,}} src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/954a5f153499583.63315b2667a7c.png'/>
        <img onClick={showLightBox} style={{width: `${100/8}%`,}} src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/c46cd1153499583.63315b26637c3.png'/>
        <img onClick={showLightBox} style={{width: `${100/8}%`,}} src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/a728c5153499583.63315b2665423.png'/>
        <img onClick={showLightBox} style={{width: `${100/8}%`,}} src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/f55e66153499583.63315b26641ba.png'/>
      
      </div>
      <div className='slideimg'>
        <img onClick={showLightBox} style={{width: `${100/4}%`,}} src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e3f834153499583.63315b2661ef3.png'/>
        <img onClick={showLightBox} style={{width: `${100/4}%`,}} src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/3ea01c153499583.63315b2660aa8.png'/>
        <img onClick={showLightBox} style={{width: `${100/4}%`,}} src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/0fc2ec153499583.63315b2664aaa.png'/>
        <img onClick={showLightBox} style={{width: `${100/4}%`,}} src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/94869f153499583.63315b2665e42.png'/>
      </div>
        <img onClick={showLightBox} src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e79d40153499583.63315b2714040.jpg'/>
        <img onClick={showLightBox} src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f98bfc153499583.63315b27145ec.jpg'/>
        <img onClick={showLightBox} src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/344693153499583.636b2e1960ee6.jpg'/>
    </div>
  )
}
