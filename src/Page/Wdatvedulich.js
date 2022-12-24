import React from 'react'
import '../css/Lygapp.css';

export default function Wdatvedulich({ showLightBox }) {
    return (
        <div className='main' style={{ backgroundColor: '#00856F' }}>
            <p className='td'>WEBSITE ĐẶT VÉ DU LỊCH TRONG NƯỚC<br></br>
                VIETTRAVEL</p>
            <p className='detailtt'>
                <span>Công nghệ sử dụng :</span> Reactjs, QRcode, Barcode, Ant design,..
            </p>
            <p className='detailtt'>
                <span>API : </span> Laravel, Cloudinary, Mysql, Passport Auth,..
            </p>
            <p className='gioithieu'>single page application giúp cho khách hàng sử dụng nhanh chóng và nhẹ nhàng. Áp dụng thẻ du lịch trực tuyến khách hàng không phải mang theo vé khi đi,...</p>
            <img onClick={showLightBox} src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/48219d139128899.622a0e33cbd99.png' />
            <img onClick={showLightBox} src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/4ef8be139128899.622a0e33cc259.png' />
            <img onClick={showLightBox} src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/a902df139128899.622a0e33cac5a.png' />
            <img onClick={showLightBox} src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/0c8d37139128899.622a0e33c9b10.png' />
            <img onClick={showLightBox} src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/cec33d139128899.622a0e33c93b8.png' />
            <img onClick={showLightBox} src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/1ca719139128899.622a0e33cb358.png' />
            <img onClick={showLightBox} src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/4feb60139128899.622a0e33ca72a.png' />
            <img onClick={showLightBox} src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/ece466139128899.622a0e33cb8d8.png' />
            <img onClick={showLightBox} src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/c6cbed139128899.622a0e33ca027.png' />
        </div>
    )
}
