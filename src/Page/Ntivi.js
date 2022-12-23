import React from 'react'
import SlideImg from '../Component/SlideImg';
import '../css/Lygapp.css';

export default function Ntivi({showLightBox}) {
    return (
        <div className='main' style={{ backgroundColor: '#333333',color:'white' }}>
            <p className='td'>WEBSITE XEM TIVI TRỰC TUYẾN NTIVI
WEBSITE WATCH TV ONLINE
</p>
            <p className='detailtt'>
                <span>Theme dự án sử dụng :</span> Streamit, Admin UI
            </p>
            <p className='detailtt'>
                <span>Plugin dự án sử dụng :</span> Elementor, Contact Form 7, Header and Footer Scripts, Insert PHP Code Snippet, All In One WP Security , Easy Google Fonts, Admin UI, Polylang, Shortcode in Menus, White Label CMS,
Ultimate Dashboard, WP Dark Mode, WP Super Cache, WP Ulike, Yoast SEO, WPS Hide Login, ...
            </p>
            <p className='detailtt'>
                <span>Các plugin hổ trợ viết plugin lấy nguồn tivi :</span> Header and Footer Scripts, Insert PHP Code Snippet,…
            </p>
            <p className='detailtt'>
                <span>Dự án hổ trợ các ngôn ngữ :</span> Tiếng việt, tiếng anh, tiếng thái, tiếng trung.
            </p>
           
            <img onClick={showLightBox} src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3c19b5136543067.61fb61559d2bf.png' />
            <img onClick={showLightBox} src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1bc5f9136543067.61fb61559ec10.png' />
            <img onClick={showLightBox} src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b5b01c136543067.61fb61559dbcd.png' />
            <img onClick={showLightBox} src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/37110c136543067.61fb61559f31d.png' />
            <img onClick={showLightBox} src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/663221136543067.61fb61559ca36.png' />
            <img onClick={showLightBox} src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/de69c3136543067.61fb61559c0a9.png' />
            <img onClick={showLightBox} src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7883f4136543067.61fb61559e369.png' />
        </div>
    )
}
