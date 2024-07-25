import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
import { useEffect, useRef, useState } from 'react'

import { hightlightsSlides } from '../constants'
import { pauseImg, playImg, replayImg } from '../utils'

const Carousel = () => {
  const videoRef = useRef([])
  const videoSpanRef = useRef([])
  const videoDivRef = useRef([])

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastvideo: false,
    isPLaying: false
  })
  const [loadedData, setLoadedData] = useState([])
  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video

  return (
    <>
      <div className="flex items-center ">
        {hightlightsSlides.map((list, index) => (
          <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            <div className="-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <div id="" playsInline={true} preload="auto" muted loop>
                  <source src={list.video} type="/mp4" />
                </div>
              </div>
              <div className="absolute top-12 left-[5%] z-10 ">
                {list.textLists.map((text) => (
                  <p key={text} className="md:text-2xl text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Carousel
