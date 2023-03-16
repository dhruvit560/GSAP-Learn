import Head from 'next/head'
import React, { useRef, useEffect } from 'react'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { gsap, Power2 } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  let allItem = useRef(null)
  let getStarted = useRef(null)
  useEffect(() => {
    gsap.fromTo(
      allItem.current,
      {
        scaleX: 0,
        ease: Power2.easeInOut,
      },
      {
        scaleX: 1,
        transformOrigin: 'left',
        ease: Power2.easeInOut,
        scrollTrigger: {
          trigger: allItem.current,
          scrub: 1,
          end: '+=700',
          toggleActions: 'play none none reverse',
          markers: false,
        },
      }
    )
    gsap.fromTo(
      getStarted.current,
      {
        scaleX: 0,
        ease: Power2.easeInOut,
        height: '0px',
        overflow: 'hidden',
      },
      {
        scaleX: 1,
        overflow: 'hidden',
        // transformOrigin: 'right',
        height: '100%',
        ease: Power2.easeInOut,
        scrollTrigger: {
          trigger: getStarted.current,
          scrub: 1,
          end: '+=700',
          toggleActions: 'play none none reverse',
          markers: false,
        },
      }
    )
  }, [])

  return (
    <>
      <Head>
        <title>TaxPal - Accounting made simple for small businesses</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <SecondaryFeatures />
        <PrimaryFeatures />
        <div ref={getStarted}>
          <CallToAction />
        </div>
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
