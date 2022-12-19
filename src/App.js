import logo from './logo.svg';
import './App.css';
import { AiOutlineDownload, AiOutlineDesktop } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { useState } from 'react';
import Lygapp from './Page/Lygapp.js';

function App() {
  const [showdt, setshowdt] = useState(false);
  const [dtid, setdtid] = useState(0);
  const listpj = [
    { name: "Binance login with QR", tech: "React native, Laravel,...", image: "https://images.unsplash.com/photo-1671038472668-1665ef4616cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", cpn: <Lygapp />, sp: 1 },
    { name: "Ứng dụng nội bộ LYG APP", tech: "React native, Nodejs,...", image: "https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", cpn: <Lygapp />, sp: 1 },
    { name: "Website đặt vé du lịch", tech: "React native, Nodejs,...", image: "https://images.unsplash.com/photo-1671332974607-eab23f0c1de3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", cpn: <Lygapp />, sp: 0 },
    { name: "Ứng dụng đặt tour du lịch", tech: "React native, Nodejs,...", image: "https://plus.unsplash.com/premium_photo-1670179694048-5e4a1dcad9b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", cpn: <Lygapp />, sp: 1 },
    { name: "Ứng dụng quản lý tiền", tech: "React native, Nodejs,...", image: "https://plus.unsplash.com/premium_photo-1670179694048-5e4a1dcad9b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", cpn: <Lygapp />, sp: 1 },
    { name: "Website hẹn hò cho trường học", tech: "React native, Nodejs,...", image: "https://plus.unsplash.com/premium_photo-1670179694048-5e4a1dcad9b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", cpn: <Lygapp />, sp: 0 },
    { name: "Website xem tivi trực tuyến NTIVI", tech: "React native, Nodejs,...", image: "https://plus.unsplash.com/premium_photo-1670179694048-5e4a1dcad9b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", cpn: <Lygapp />, sp: 0 },
    { name: "Website tuổi thơ việt SAIGON'S GAME", tech: "React native, Nodejs,...", image: "https://plus.unsplash.com/premium_photo-1670179694048-5e4a1dcad9b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", cpn: <Lygapp />, sp: 0 },
    { name: "Website sell game accounts", tech: "React native, Nodejs,...", image: "https://plus.unsplash.com/premium_photo-1670179694048-5e4a1dcad9b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", cpn: <Lygapp />, sp: 0 },
    { name: "Hệ thống quản lý trường học 8888", tech: "React native, Nodejs,...", image: "https://plus.unsplash.com/premium_photo-1670179694048-5e4a1dcad9b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", cpn: <Lygapp />, sp: 2 },

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
        <img src="https://images.unsplash.com/photo-1669397113207-921e30c34f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"></img>
      </div>
      <div className='p-p'>
        <div className='profile'>
          <div className='profile-i'>
            <div className='avt'>
              <img src='https://images.unsplash.com/photo-1671394401034-56eadf53f5dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' />
            </div>
            <p className='hoten'>Lorem isulks</p>
            <p className='position'>Mobile and Web Developer</p>
            <div className='action'>
              <button className='button-blue'>Behance</button>
              <button className='button-white'>Gmail</button>
            </div>
            <div className='pagrap'>
              <p className='tdpag'>Về tác giả</p>
              <p className='noidungpag'>The primary driver for the increase in the demand for mobile applications is the increase and the reliability of internet usage, particularly in developing nations. With almost all mobile applications available only from e-platforms, access to reliable internet is crucial for the growth of mobile application buyers.</p>
            </div>
            <div className='pagrap'>
              <p className='tdpag'>Tải file đính kèm</p>
              <p className='noidungpag'><a href='#'><AiOutlineDownload size={15} style={{ marginRight: 10 }} />cv.pdf</a></p>
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
        <div className='outdiv' onClick={() => {
          setshowdt(false)
        }}></div>
        <div className='indiv'>
          {dtid}
        </div>
        <div className='outdiv' onClick={() => {
          setshowdt(false)
        }}></div>

      </div>
      }
    </div>
  );
}

export default App;
