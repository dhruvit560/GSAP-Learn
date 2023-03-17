import React, { useRef, useEffect, PureComponent } from 'react'
import { gsap, Power2, Power4 } from 'gsap'
import TweenMax from 'gsap'
import Experience from './Experience'
import Skills from './Skills'

const Portfolio = () => {
  useEffect(() => {
    var magnets = document.querySelectorAll('.magnetic')
    var strength = 20

    magnets.forEach((magnet) => {
      magnet.addEventListener('mousemove', moveMagnet)
      magnet.addEventListener('mouseout', function (event) {
        TweenMax.to(event.currentTarget, 1, {
          x: 0,
          y: 0,
          ease: Power4.easeOut,
        })
      })
    })

    function moveMagnet(event) {
      var magnetButton = event.currentTarget
      var bounding = magnetButton.getBoundingClientRect()

      //console.log(magnetButton, bounding)

      TweenMax.to(magnetButton, 1, {
        x:
          ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) *
          strength,
        y:
          ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *
          strength,
        ease: Power4.easeOut,
      })

      //magnetButton.style.transform = 'translate(' + (((( event.clientX - bounding.left)/(magnetButton.offsetWidth))) - 0.5) * strength + 'px,'+ (((( event.clientY - bounding.top)/(magnetButton.offsetHeight))) - 0.5) * strength + 'px)';
    }

    let button = document.querySelector('.primary-button')
    let item = document.querySelector('.primary-button .round')

    button.addEventListener('mouseenter', function (event) {
      this.classList += ' animate'

      let buttonX = event.offsetX
      let buttonY = event.offsetY

      if (buttonY < 24) {
        item.style.top = 0 + 'px'
      } else if (buttonY > 30) {
        item.style.top = 48 + 'px'
      }

      item.style.left = buttonX + 'px'
      item.style.width = '1px'
      item.style.height = '1px'
    })

    button.addEventListener('mouseleave', function () {
      this.classList.remove('animate')

      let buttonX = event.offsetX
      let buttonY = event.offsetY

      if (buttonY < 24) {
        item.style.top = 0 + 'px'
      } else if (buttonY > 30) {
        item.style.top = 48 + 'px'
      }
      item.style.left = buttonX + 'px'
    })
    var cursor = document.querySelector('.blob')

    document.addEventListener('mousemove', function (e) {
      var x = e.clientX
      var y = e.clientY
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
    })
  }, [])

  return (
    <>
      <div className="blob relative z-10"></div>
      <div className="min-h-screen bg-primary py-10">
        <div className="container">
          <div className="rounded-xl border border-white p-10">
            <div className="grid grid-cols-12 overflow-hidden border border-white">
              <div className="col-span-4">
                <img src="https://picsum.photos/800" alt="" />
              </div>
              <div className="col-span-8 p-10">
                <h1 className="text-3xl font-bold">
                  <span className="text-orange">In publishing !</span> Lorem
                  ipsum is a...
                </h1>
                <div className="orange-line mt-2 h-0.5 w-20 bg-orange"></div>
                <p className="mt-4 text-sm">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used a
                </p>
                <div className="magnetic mt-5">
                  <button class="primary-button">
                    <div className="btn-text">Hover me !</div>
                    <span class="round" />
                  </button>
                </div>
              </div>
            </div>
            <Experience />
            <Skills />
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio
