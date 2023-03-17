import React, { useEffect } from 'react'
import { gsap, Power2, Power4 } from 'gsap'

const Skills = () => {
  useEffect(() => {
    gsap.utils.toArray('.stb_line_single').forEach((line, i) => {
      const links = line.querySelectorAll('a'),
        tl = horizontalLoop(links, {
          repeat: -1,
          speed: 1 + i * 0.5,
          paddingRight: parseFloat(
            gsap.getProperty(links[0], 'marginRight', 'px')
          ), // otherwise first element would be right up against the last when it loops. In this layout, the spacing is done with marginRight.
        })
      links.forEach((link) => {
        link.addEventListener('mouseenter', () => tl.pause())
        link.addEventListener('mouseleave', () => tl.resume())
      })
    })

    /*
This helper function makes a group of elements animate along the x-axis in a seamless, responsive loop.

Features:
 - Uses xPercent so that even if the widths change (like if the window gets resized), it should still work in most cases.
 - When each item animates to the left or right enough, it will loop back to the other side
 - Optionally pass in a config object with values like "speed" (default: 1, which travels at roughly 100 pixels per second), paused (boolean),  repeat, and paddingRight.
 - The returned timeline will have the following methods added to it:
   - next() - animates to the next element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
   - previous() - animates to the previous element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
   - toIndex() - pass in a zero-based index value of the element that it should animate to, and optionally pass in a vars object to control duration, easing, etc. Always goes in the shortest direction
   - current() - returns the current index (if an animation is in-progress, it reflects the final index)
   - times - an Array of the times on the timeline where each element hits the "starting" spot. There's also a label added accordingly, so "label1" is when the 2nd element reaches the start.
 */
    function horizontalLoop(items, config) {
      items = gsap.utils.toArray(items)
      config = config || {}
      let tl = gsap.timeline({
          repeat: config.repeat,
          paused: config.paused,
          defaults: { ease: 'none' },
        }),
        length = items.length,
        startX = items[0].offsetLeft,
        times = [],
        widths = [],
        xPercents = [],
        curIndex = 0,
        pixelsPerSecond = (config.speed || 1) * 100,
        snap =
          config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
        totalWidth,
        curX,
        distanceToStart,
        distanceToLoop,
        item,
        i
      gsap.set(items, {
        // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
        xPercent: (i, el) => {
          let w = (widths[i] = parseFloat(gsap.getProperty(el, 'width', 'px')))
          xPercents[i] = snap(
            (parseFloat(gsap.getProperty(el, 'x', 'px')) / w) * 100 +
              gsap.getProperty(el, 'xPercent')
          )
          return xPercents[i]
        },
      })
      gsap.set(items, { x: 0 })
      totalWidth =
        items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        items[length - 1].offsetWidth *
          gsap.getProperty(items[length - 1], 'scaleX') +
        (parseFloat(config.paddingRight) || 0)
      for (i = 0; i < length; i++) {
        item = items[i]
        curX = (xPercents[i] / 100) * widths[i]
        distanceToStart = item.offsetLeft + curX - startX
        distanceToLoop =
          distanceToStart + widths[i] * gsap.getProperty(item, 'scaleX')
        tl.to(
          item,
          {
            xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
            duration: distanceToLoop / pixelsPerSecond,
          },
          0
        )
          .fromTo(
            item,
            {
              xPercent: snap(
                ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
              ),
            },
            {
              xPercent: xPercents[i],
              duration:
                (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
              immediateRender: false,
            },
            distanceToLoop / pixelsPerSecond
          )
          .add('label' + i, distanceToStart / pixelsPerSecond)
        times[i] = distanceToStart / pixelsPerSecond
      }
      function toIndex(index, vars) {
        vars = vars || {}
        Math.abs(index - curIndex) > length / 2 &&
          (index += index > curIndex ? -length : length) // always go in the shortest direction
        let newIndex = gsap.utils.wrap(0, length, index),
          time = times[newIndex]
        if (time > tl.time() !== index > curIndex) {
          // if we're wrapping the timeline's playhead, make the proper adjustments
          vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) }
          time += tl.duration() * (index > curIndex ? 1 : -1)
        }
        curIndex = newIndex
        vars.overwrite = true
        return tl.tweenTo(time, vars)
      }
      tl.next = (vars) => toIndex(curIndex + 1, vars)
      tl.previous = (vars) => toIndex(curIndex - 1, vars)
      tl.current = () => curIndex
      tl.toIndex = (index, vars) => toIndex(index, vars)
      tl.times = times
      return tl
    }
  }, [])

  return (
    <>
      <div className="skills mt-10">
        <div className="relative">
          <h2 className="relative z-[1] text-3xl font-bold">Lorem Ipsum</h2>
          <div className="w-auto">
            <svg
              aria-hidden="true"
              viewBox="0 0 281 40"
              className="absolute top-1/2 left-0 w-[12rem] fill-orange"
              preserveAspectRatio="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
              ></path>
            </svg>
          </div>
        </div>

        <div class="services-ticker-block mt-6">
          <div class="stb_line_single">
            <a href="#" class="stb-item border-font">
              <span>HTML</span>
            </a>
            <a href="#" class="stb-item border-font">
              <span>CSS3</span>
            </a>
            <a href="#" class="stb-item border-font">
              <span>Bootstrap</span>
            </a>
            <a href="#" class="stb-item border-font">
              <span>Tailwind</span>
            </a>
            <a href="#" class="stb-item border-font">
              <span>Simple 5</span>
            </a>
            <a href="#" class="stb-item border-font">
              <span>Simple 6</span>
            </a>
            <a href="#" class="stb-item border-font">
              <span>Simple 7</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
