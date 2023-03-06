import logo from './logo.svg';
import './App.css';
import { AiOutlineDownload, AiOutlineDesktop, AiOutlineClose } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { useState } from 'react';
import Lygapp from './Page/Lygapp.js';
import BinanceLG from './Page/BinanceLG';
import Dunet from './Page/Dunet';
import Wdatvedulich from './Page/Wdatvedulich';
import Udattourdulich from './Page/Udattourdulich';
import Quanlytien from './Page/Quanlytien';
import Ntivi from './Page/Ntivi';
import Tuoithoviet from './Page/Tuoithoviet';
import Ngame from './Page/Ngame';
import QL8888 from './Page/8888';
import TinderFS from './Page/TinderFS';

function App() {
  const [showdt, setshowdt] = useState(false);
  const [dtid, setdtid] = useState(0);
  const [showlightbox, setshowlightbox] = useState(false)
  const [lightboxsrc, setlightboxsrc] = useState('')

  const showLightBox = (e) => {
    if (e != undefined) {
      setlightboxsrc(e.target.src);
      setshowlightbox(true);
    } else {
      setshowlightbox(false);
    }
  }
  const listpj = [
    { name: "Dunet - Cổng donate cho streamer", tech: "Laravel, Mysql ...", image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/09b1f2159641421.Y3JvcCw4MDgsNjMyLDAsMA.png", cpn: <Dunet showLightBox={showLightBox} />, sp: 0 },
    { name: "Binance login with QR", tech: "React Native, Laravel,...", image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/3fbdba159387565.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png", cpn: <BinanceLG showLightBox={showLightBox} />, sp: 2 },
    { name: "Ứng dụng nội bộ LYG APP", tech: "React Native, Expo, Nodejs,...", image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/be6d86153499583.Y3JvcCwxMDU4LDgyOCwyMCww.png", cpn: <Lygapp showLightBox={showLightBox} />, sp: 1 },
    { name: "Website đặt vé du lịch", tech: "Reactjs, Cloudinary, Laravel,...", image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/753ee0139128899.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png", cpn: <Wdatvedulich showLightBox={showLightBox} />, sp: 0 },
    { name: "Ứng dụng đặt tour du lịch", tech: "React native, Larave, Mysql,...", image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/98da89136545111.Y3JvcCw4MjcsNjQ3LDY1LDA.png", cpn: <Udattourdulich showLightBox={showLightBox} />, sp: 1 },
    { name: "Ứng dụng quản lý tiền", tech: "React Native, Expo, SqLite,....", image: "https://mir-s3-cdn-cf.behance.net/projects/404_webp/4323cc136544603.Y3JvcCw2NDUsNTA1LDM4LDMz.png", cpn: <Quanlytien showLightBox={showLightBox} />, sp: 1 },
    { name: "Website hẹn hò cho trường học", tech: "React native, Nodejs,...", image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/2aeef4136543239.Y3JvcCwxMzIwLDEwMzMsMzAwLDA.png", cpn: <TinderFS showLightBox={showLightBox} />, sp: 0 },
    { name: "Website xem tivi trực tuyến NTIVI", tech: "WordPress,..", image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/8daebd136543067.Y3JvcCwxMjUxLDk3OSwzMzQsMA.png", cpn: <Ntivi showLightBox={showLightBox} />, sp: 0 },
    { name: "Website tuổi thơ việt SAIGON'S GAME", tech: "PHP, MySQL, Laravel,...", image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/2cd5b6136542883.Y3JvcCwxMjU2LDk4Myw0MDcsMA.jpg", cpn: <Tuoithoviet showLightBox={showLightBox} />, sp: 0 },
    { name: "Website sell game accounts", tech: "PHP, MySQL, JQUERY, AJAX...", image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/9b106c136542661.Y3JvcCwxMzgwLDEwODAsNiww.png", cpn: <Ngame showLightBox={showLightBox} />, sp: 0 },
    { name: "Hệ thống quản lý trường học 8888", tech: " PHP, MySQL, Cloudinary, Firebase,...", image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/340590136542111.Y3JvcCwxMTM3LDg4OSwwLDA.png", cpn: <QL8888 showLightBox={showLightBox} />, sp: 2 },

  ];
  const showsp = (sp) => {
    switch (sp) {
      case 0:
        return <AiOutlineDesktop />
      case 1:
        return <BsPhone />
      case 2:
        return <><BsPhone style={{ marginRight: 10 }} />
          <AiOutlineDesktop /></>

    }
  }

  return (
    <div>
      <div className='banner'>
        <img className='imgofbanner' src="https://images.unsplash.com/photo-1669397113207-921e30c34f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"></img>
      </div>
      <div className='p-p'>
        <div className='profile'>
          <div className='profile-i'>
            <div className='avt'>
              <img src='https://mir-s3-cdn-cf.behance.net/user/230/6e25a21188340511.61fb7005e8eaf.jpg' />
            </div>
            <p className='hoten'>Trung Nam</p>
            <p className='position'>Mobile and Web Developer</p>
            <div className='action'>
              <a href='https://www.behance.net/trungnamdev' target="_blank" className='button-blue' submit>Behance</a>
              <a href='mailto:trungnamdev@gmail.com' target="_blank" className='button-white'>Gmail</a>
            </div>
            <div className='pagrap'>
              <p className='tdpag'>INTRODUCE</p>
              <p className='noidungpag'>
                As a web and mobile app developer with experience in PHP, framework LARAVEL, React Native, Expo, ReactJs, MYSQL, MSSQL, Realtime database, API, GRAPHQL...
                <br></br><br></br>
                Loves to learn and explore new technologies, can quickly research technology to apply to each different project. (Self-taught react native in 1 week to implement a project for the company).
                <br></br><br></br>
                Ability to analyze systems and present good source code can work independently and in groups.
              </p>
            </div>
            <div className='pagrap'>
              <p className='tdpag'>My CV</p>
              <p className='noidungpag'><a href='./cv/NguyenTranTrungNam_CV.pdf'><AiOutlineDownload size={15} style={{ marginRight: 10 }} />cv.pdf</a></p>
            </div>
          </div>
        </div>
        <div className='project'>
          <div className='chuapj'>
            {listpj.map((value, index, array) => {
              console.log(value);
              return <div className='pj' key={index} onClick={() => {
                setdtid(value.cpn);
                setshowdt(true);
              }}>
                <img src={value.image} />
                <div className='detailpj'>
                  <div className='namepj'>{value.name}</div>
                  <div className='tech'>{value.tech}</div>
                </div>
                <div className='detailsp'>
                  {showsp(value.sp)}

                </div>
              </div>
            })}
          </div>
        </div>

      </div>
      {showdt && <div className='dtpo'>
        {/* <div className='outdiv' onClick={() => {
          setshowdt(false)
        }}></div>
        <div className='indiv'>
          {dtid}
        </div>
        <div className='outdiv' onClick={() => {
          setshowdt(false)
        }}></div> */}
        <div className='outdiv' onClick={() => {
          setshowdt(false)
        }}><AiOutlineClose size={30} color="WHITE" /></div>
        <div className='indiv'>
          {dtid}
        </div>
      </div>
      }
      {showlightbox && <div className='lightbox'>
        <img src={lightboxsrc}></img>
        <div style={{ position: 'absolute', right: '5%', top: '5%' }} onClick={() => { showLightBox() }}>
          <AiOutlineClose size={30} color="WHITE" />
        </div>
      </div>
      }
    </div>
  );
}

export default App;
