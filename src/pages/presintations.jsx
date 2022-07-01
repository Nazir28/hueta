import React, { useState } from 'react'
import MainLayout from '../layouts/main-layout'

const presintations = [
    { title: 'Презентации', n: 1, body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dolorum ducimus. Dicta quis quas aspernatur impedit! Cumque porro reprehenderit repellendus odio harum odit amet maxime. Earum, soluta sequi. Numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dolorum ducimus. Dicta quis quas aspernatur impedit! Cumque porro reprehenderit repellendus odio harum odit amet maxime. Earum, soluta sequi. Numquam.' },
    { title: 'Презентации', n: 2, body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dolorum ducimus. Dicta quis quas aspernatur impedit! Cumque porro reprehenderit repellendus odio harum odit amet maxime. Earum, soluta sequi. Numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dolorum ducimus. Dicta quis quas aspernatur impedit! Cumque porro reprehenderit repellendus odio harum odit amet maxime. Earum, soluta sequi. Numquam.' },
    { title: 'Презентации', n: 3, body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dolorum ducimus. Dicta quis quas aspernatur impedit! Cumque porro reprehenderit repellendus odio harum odit amet maxime. Earum, soluta sequi. Numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dolorum ducimus. Dicta quis quas aspernatur impedit! Cumque porro reprehenderit repellendus odio harum odit amet maxime. Earum, soluta sequi. Numquam.' },
    { title: 'Презентации', n: 4, body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dolorum ducimus. Dicta quis quas aspernatur impedit! Cumque porro reprehenderit repellendus odio harum odit amet maxime. Earum, soluta sequi. Numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dolorum ducimus. Dicta quis quas aspernatur impedit! Cumque porro reprehenderit repellendus odio harum odit amet maxime. Earum, soluta sequi. Numquam.' },
    { title: 'Презентации', n: 5, body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dolorum ducimus. Dicta quis quas aspernatur impedit! Cumque porro reprehenderit repellendus odio harum odit amet maxime. Earum, soluta sequi. Numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dolorum ducimus. Dicta quis quas aspernatur impedit! Cumque porro reprehenderit repellendus odio harum odit amet maxime. Earum, soluta sequi. Numquam.' },
    { title: 'Презентации', n: 6, body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dolorum ducimus. Dicta quis quas aspernatur impedit! Cumque porro reprehenderit repellendus odio harum odit amet maxime. Earum, soluta sequi. Numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dolorum ducimus. Dicta quis quas aspernatur impedit! Cumque porro reprehenderit repellendus odio harum odit amet maxime. Earum, soluta sequi. Numquam.' },
    { title: 'Презентации', n: 7, body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dolorum ducimus. Dicta quis quas aspernatur impedit! Cumque porro reprehenderit repellendus odio harum odit amet maxime. Earum, soluta sequi. Numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dolorum ducimus. Dicta quis quas aspernatur impedit! Cumque porro reprehenderit repellendus odio harum odit amet maxime. Earum, soluta sequi. Numquam.' },
    { title: 'Презентации', n: 8, body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dolorum ducimus. Dicta quis quas aspernatur impedit! Cumque porro reprehenderit repellendus odio harum odit amet maxime. Earum, soluta sequi. Numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dolorum ducimus. Dicta quis quas aspernatur impedit! Cumque porro reprehenderit repellendus odio harum odit amet maxime. Earum, soluta sequi. Numquam.' },
]

function Presintations() {
    const [presintation, setPresintation] = useState({})
    return (
        <MainLayout>
            <h1>Презентации</h1>
            <div className='main-nav mt-4'>
                {
                    presintations.map((el, idx) => (
                        <button className='btn' onClick={() => setPresintation(el)} data-bs-toggle="modal" data-bs-target="#exampleModal" key={idx}>
                            {el.title} {el?.n}
                        </button>
                    ))
                }
            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Глава {presintation?.n}. {presintation?.title} </h5>
                        </div>
                        <div className="modal-body">
                            <h5>Статья {presintation?.n}. {presintation.title}</h5>
                            <p>{presintation?.body}</p>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Presintations