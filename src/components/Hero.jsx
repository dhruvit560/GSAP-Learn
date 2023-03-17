import Image from 'next/image'
import React, { useRef, useEffect, PureComponent } from 'react'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'
import { gsap, Power2, Power4 } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
// import TweenMax from 'gsap/dist/TweenMax'
// import {  } from 'gsap/all'
import TweenMax from 'gsap'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TweenMax)

export function Hero() {
  let allItem = useRef(null)
  let text = useRef(null)
  useEffect(() => {
    gsap.fromTo(
      allItem.current,
      {
        y: 200,
        ease: Power2.easeInOut,
      },
      {
        y: 0,
        transformOrigin: 'left',
        ease: Power2.easeInOut,
        scrollTrigger: {
          trigger: allItem.current,
          scrub: 1,
          end: '+=500',
          toggleActions: 'play none none reverse',
          markers: false,
        },
      }
    )
    gsap.fromTo(
      text.current,
      {
        y: 200,
        ease: Power2.easeInOut,
      },
      {
        y: 0,
        transformOrigin: 'left',
        ease: Power2.easeInOut,
        scrollTrigger: {
          trigger: text.current,
          scrub: 1,
          end: '+=300',
          toggleActions: 'play none none reverse',
          markers: false,
        },
      }
    )
  }, [])

  useEffect(() => {
    var magnets = document.querySelectorAll('.magnetic')
    var strength = 40

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
  }, [])

  return (
    <div>
      <Container className="pt-20 pb-16 text-center lg:pt-32">
        <div className="h-[11rem] overflow-hidden">
          <h1
            ref={allItem}
            className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl"
          >
            Accounting{' '}
            <span className="relative whitespace-nowrap text-blue-600">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="relative">made simple</span>
            </span>{' '}
            for small businesses.
          </h1>
        </div>
        <div className="h-[6rem] overflow-hidden">
          <p
            ref={text}
            className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700"
          >
            Most bookkeeping software is accurate, but hard to use. We make the
            opposite trade-off, and hope you don’t get audited.
          </p>
        </div>
        <div className="mt-10 flex justify-center gap-x-6">
          {/* <div className="magnetic">
            <Button href="/register">Get 6 months free</Button>
          </div> */}
          <div className="magnetic">
            <button class="primary-button">
              <div className="btn-text">Hover me !</div>
              <span class="round" />
            </button>
          </div>
          <div className="magnetic">
            <Button
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              variant="outline"
            >
              <svg
                aria-hidden="true"
                className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
              >
                <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
              </svg>
              <span className="ml-3">Watch video</span>
            </Button>
          </div>
        </div>
        <div className="mt-36 lg:mt-44">
          <p className="font-display text-base text-slate-900">
            Trusted by these six companies so far
          </p>
          <ul
            role="list"
            className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
          >
            {[
              [
                { name: 'Transistor', logo: logoTransistor },
                { name: 'Tuple', logo: logoTuple },
                { name: 'StaticKit', logo: logoStaticKit },
              ],
              [
                { name: 'Mirage', logo: logoMirage },
                { name: 'Laravel', logo: logoLaravel },
                { name: 'Statamic', logo: logoStatamic },
              ],
            ].map((group, groupIndex) => (
              <li key={groupIndex}>
                <ul
                  role="list"
                  className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
                >
                  {group.map((company) => (
                    <li key={company.name} className="flex">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        unoptimized
                      />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  )
}
