import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import MainLayout from '../layouts/main-layout'

const videos = [
    { claster: '/image/clasters/sa.jpeg', text: 'Lorem ipsum dolor sit amet consectetur.', video: 'https://www.youtube.com/watch?v=ysz5S6PUM-U', },
    { claster: '/image/clasters/sa.jpeg', text: 'Lorem ipsum dolor sit amet consectetur.', video: 'https://www.youtube.com/watch?v=ysz5S6PUM-U', },
    { claster: '/image/clasters/sa.jpeg', text: 'Lorem ipsum dolor sit amet consectetur.', video: 'https://www.youtube.com/watch?v=ysz5S6PUM-U', },
    { claster: '/image/clasters/sa.jpeg', text: 'Lorem ipsum dolor sit amet consectetur.', video: 'https://www.youtube.com/watch?v=ysz5S6PUM-U', },
    { claster: '/image/clasters/sa.jpeg', text: 'Lorem ipsum dolor sit amet consectetur.', video: 'https://www.youtube.com/watch?v=ysz5S6PUM-U', },
    { claster: '/image/clasters/sa.jpeg', text: 'Lorem ipsum dolor sit amet consectetur.', video: 'https://www.youtube.com/watch?v=ysz5S6PUM-U', },
]

function Videos() {
    const [video, setVideo] = useState()
    return (
        <MainLayout>
            <h1>Видео</h1>
            <div className="v-row mt-4">
                {
                    videos.map((el, idx) => (
                        <div className="" key={idx}>
                            <div className=" videos-card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() =>setVideo(el)}>
                                <div>
                                    <img src={el.claster} alt="" className='w-100' />
                                </div>
                                <p>{el.text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{video?.text}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ReactPlayer className="w-100" height={400} controls url={video?.video} />

                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Videos