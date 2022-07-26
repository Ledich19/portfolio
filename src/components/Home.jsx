import React, { useEffect, useState } from 'react'
import './Home.scss'
// import { FaReact } from 'react-icons/fa'
// import { FaNodeJs } from 'react-icons/fa'
// import { FaHtml5 } from 'react-icons/fa'
// import { FaCss3Alt } from 'react-icons/fa'
// import { gsap } from 'gsap'

const Home = ({ id }) => {
  const [active, setActive] = useState(0)
  const img = [
    'https://images.unsplash.com/photo-1502657877623-f66bf489d236?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=50',
    'https://img.wallpapersafari.com/desktop/1440/900/90/35/u42DOn.jpg',
    'https://img.wallpapersafari.com/desktop/1440/900/69/1/5J6VyN.jpg',
    'https://www.designyourway.net/blog/wp-content/uploads/2018/12/programming-wallpaper11.jpg',
    'https://www.designyourway.net/blog/wp-content/uploads/2018/12/programming-wallpaper8.jpg',
    'https://images.wallpaperscraft.com/image/single/hacker_hood_code_214985_1920x1080.jpg',
  ]
  useEffect(() => {
    setActive(img.length - 1)
  }, [])

  const hendleMouseOver = (e, url, i) => {
    document.querySelectorAll('.sliderColumn')
      .forEach((e, index) => {
        const size = e.offsetWidth - (img.length * 50)
        const jerk = i > active ? true : false

        if (index > i) {
          const animation = e.animate([
            {
            },
            {

              transform: `translate(${index === i + 1 && !jerk ? size + 20 : size}px)`
            },
            {
              transform: `translate(${size}px)`
            }
          ], 300)
          animation.addEventListener('finish', function () {
            e.style.transform = `translate(${size}px)`
          })
        } else {
          const animation = e.animate([
            {
              // transform: `translate(${size}px)`
            },
            {
              transform: `translate(${index === i && jerk ? -20 : 0}px)`
            },
            {
              transform: 'translate(0px)'
            }
          ], 300)
          animation.addEventListener('finish', function () {
            e.style.transform = 'translate(0px)'
          })
        }
      })
    setActive(i)
    const sliderBg = document.getElementById('slider-bg')

    const animationBg = sliderBg.animate([
      {

      },
      {
        backgroundImage: `url(${url})`
      }
    ], 300)
    animationBg.addEventListener('finish', function () {

      sliderBg.style.backgroundImage = `url(${url})`
    })
  }


  return (
    <>
      <div id={id} className='app-home slider-fg'>

        {img.map((url, i) => {
          const style = {
            left: `${i * 50}px`
          }
          return <div style={style} key={i} onMouseOver={(e) => hendleMouseOver(e, url, i)} className={`sliderColumn sliderColumn__${i}`}>{i + 1}</div>
        })}

        {/* <div className='circle__0'></div>
      <div className='circle__1'><FaCss3Alt/></div>
      <div className='circle__2'><FaHtml5/></div>
      <div className='circle__3'><FaReact/></div>
      <div className='circle__4'><FaNodeJs/></div> */}
      </div>
      <div className=''></div>
    </>
  )
}

export default Home