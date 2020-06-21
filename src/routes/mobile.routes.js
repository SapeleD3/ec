import React, { useState, useEffect } from 'react';
import { Menu, Carousel, Card } from 'antd';
import cake from '../assets/cake.png';
import birthday from '../assets/birthday.gif';
import photo1 from '../assets/1.jpeg';
import photo2 from '../assets/2.jpeg';
import photo3 from '../assets/3.jpeg';
import photo4 from '../assets/4.jpeg';
import photo5 from '../assets/5.jpeg';

import { HomeOutlined, FileImageOutlined } from '@ant-design/icons';

export default function MAPP() {
  const [current, setCurrent] = useState('home');
  const [bg, setBg] = useState('grey');

  const images = [photo1, photo2, photo3, photo4, photo5];

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  useEffect(() => {
    setTimeout(() => {
      setBg('white');
    }, 8500);
  }, []);

  const changeBg = () => {
    if (bg === 'grey') {
      return (
        <div style={{ height: '85%', backgroundColor: '#E5E5E5' }}>
          <div>
            <img
              alt='cake'
              src={birthday}
              style={{
                width: 384,
                height: '55%',
                position: 'fixed',
                top: '45%',
                left: '50%',
                marginTop: 120,
                /* bring your own prefixes */
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>
          <div style={{ paddingTop: 50 }}>
            <h3
              style={{
                fontFamily: '"Comfortaa", cursive',
                color: 'black',
              }}
            >
              wishing long life and prosperity
              <br />
              <span style={{ fontFamily: '"Pacifico", cursive' }}>
                with love from moses
              </span>
            </h3>
          </div>
        </div>
      );
    } else {
      return (
        <div style={{ height: '85%', backgroundColor: '#FFFFFF' }}>
          <div>
            <img
              alt='cake'
              src={cake}
              style={{
                width: 324,
                height: '55%',
                position: 'fixed',
                top: '45%',
                left: '50%',
                marginTop: 120,
                /* bring your own prefixes */
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>
          <div style={{ paddingTop: 50 }}>
            <h3
              style={{
                fontFamily: '"Comfortaa", cursive',
                color: 'black',
              }}
            >
              wishing long life and prosperity
              <br />
              <span style={{ fontFamily: '"Pacifico", cursive' }}>
                with love from moses
              </span>
            </h3>
          </div>
        </div>
      );
    }
  };
  return (
    <div style={{ height: '100vh' }}>
      <div style={{ backgroundColor: '#722F37', paddingTop: 30 }}>
        <div style={{ color: 'white', height: 45 }}>
          <h3 style={{ color: 'white', fontFamily: '"Comfortaa", cursive' }}>
            Happy Birthday EC Twin's
          </h3>
        </div>
        <Menu
          style={{
            textAlign: 'center',
            backgroundColor: '#722F37',
            color: 'white',
            fontSize: 18,
            fontFamily: '"Comfortaa", cursive',
          }}
          onClick={handleClick}
          selectedKeys={[current]}
          mode='horizontal'
        >
          <Menu.Item key='home' icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key='gallery' icon={<FileImageOutlined />}>
            Gallery
          </Menu.Item>
        </Menu>
      </div>
      <>
        {current === 'home' ? (
          changeBg()
        ) : (
          <div>
            <Carousel autoplay>
              {images.map((val) => (
                <img alt='g5' key={val} src={val} />
              ))}
            </Carousel>
            <div
              style={{
                display: 'flex',
                flexFlow: 'row wrap',
                justifyContent: 'center',
                marginTop: 10,
              }}
            >
              {images.map((val) => (
                <Card
                  hoverable={true}
                  type='inner'
                  style={{ width: 160, margin: 5 }}
                  cover={<img key={val} alt='example' src={val} />}
                ></Card>
              ))}
            </div>
          </div>
        )}
      </>
    </div>
  );
}
