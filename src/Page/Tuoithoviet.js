import React from 'react'
import SlideImg from '../Component/SlideImg';
import '../css/Lygapp.css';

export default function Tuoithoviet({ showLightBox }) {
    return (
        <div className='main' style={{ backgroundColor: '#085C78', color: 'white' }}>
            <p className='td'>WEBSITE TUỔI THƠ VIỆT<br></br>
                SAIGON'S GAME</p>
            <p className='detailtt'>
                <span>Công nghệ sử dụng :</span> PHP, MySQL, Laravel, Pusher realtime, Auth...
            </p>
            <p className='detailtt'>
                <span>Chức năng nổi bật :</span> Một số game của việt nam như búa kéo bao, bầu cua,...
            </p>
            <p className='gioithieu'>
                Chơi trực tiếp cùng với mọi người trong thời gian thực <br></br><br></br> Búa kéo bao : Phòng 2 người chơi trực tiếp với nhau (hệ thống tự động tạo phòng mới khi các phòng khác full)<br></br><br></br> Bầu cua : Tất cả mọi người sẽ chơi cùng 1 bàn khi đặt cược tất cả mọi người trong bàn sẽ thấy xu người đó (Phần biệt tiền đặt cược của mình và mọi người bằng độ mờ của xu)
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
