import React, { useState } from 'react'
import MainLayout from '../layouts/main-layout'

const projects = [
    { title: 'Проект', n: 1, body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dolorum ducimus. Dicta quis quas aspernatur impedit! Cumque porro reprehenderit repellendus odio harum odit amet maxime. Earum, soluta sequi. Numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dolorum ducimus. Dicta quis quas aspernatur impedit! Cumque porro reprehenderit repellendus odio harum odit amet maxime. Earum, soluta sequi. Numquam.' },
    { title: 'Проект', n: 2, body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dolorum ducimus. Dicta quis quas aspernatur impedit! Cumque porro reprehenderit repellendus odio harum odit amet maxime. Earum, soluta sequi. Numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dolorum ducimus. Dicta quis quas aspernatur impedit! Cumque porro reprehenderit repellendus odio harum odit amet maxime. Earum, soluta sequi. Numquam.' },
    { title: 'Проект', n: 3, body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dolorum ducimus. Dicta quis quas aspernatur impedit! Cumque porro reprehenderit repellendus odio harum odit amet maxime. Earum, soluta sequi. Numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dolorum ducimus. Dicta quis quas aspernatur impedit! Cumque porro reprehenderit repellendus odio harum odit amet maxime. Earum, soluta sequi. Numquam.' },
    { title: 'Проект', n: 4, body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dolorum ducimus. Dicta quis quas aspernatur impedit! Cumque porro reprehenderit repellendus odio harum odit amet maxime. Earum, soluta sequi. Numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dolorum ducimus. Dicta quis quas aspernatur impedit! Cumque porro reprehenderit repellendus odio harum odit amet maxime. Earum, soluta sequi. Numquam.' },
    { title: 'Проект', n: 5, body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dolorum ducimus. Dicta quis quas aspernatur impedit! Cumque porro reprehenderit repellendus odio harum odit amet maxime. Earum, soluta sequi. Numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dolorum ducimus. Dicta quis quas aspernatur impedit! Cumque porro reprehenderit repellendus odio harum odit amet maxime. Earum, soluta sequi. Numquam.' },
    { title: 'Проект', n: 6, body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dolorum ducimus. Dicta quis quas aspernatur impedit! Cumque porro reprehenderit repellendus odio harum odit amet maxime. Earum, soluta sequi. Numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dolorum ducimus. Dicta quis quas aspernatur impedit! Cumque porro reprehenderit repellendus odio harum odit amet maxime. Earum, soluta sequi. Numquam.' },
    { title: 'Проект', n: 7, body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dolorum ducimus. Dicta quis quas aspernatur impedit! Cumque porro reprehenderit repellendus odio harum odit amet maxime. Earum, soluta sequi. Numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dolorum ducimus. Dicta quis quas aspernatur impedit! Cumque porro reprehenderit repellendus odio harum odit amet maxime. Earum, soluta sequi. Numquam.' },
    { title: 'Проект', n: 8, body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dolorum ducimus. Dicta quis quas aspernatur impedit! Cumque porro reprehenderit repellendus odio harum odit amet maxime. Earum, soluta sequi. Numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi dolorum ducimus. Dicta quis quas aspernatur impedit! Cumque porro reprehenderit repellendus odio harum odit amet maxime. Earum, soluta sequi. Numquam.' },
]

function Projects() {
    const [project, setProject] = useState({})
    return (
        <MainLayout>
            <h1>Проекты</h1>
            <div className='main-nav mt-4'>
                {
                    projects.map((el, idx) => (
                        <button className='btn' onClick={() => setProject(el)} data-bs-toggle="modal" data-bs-target="#exampleModal" key={idx}>
                            {el.title} {el?.n}
                        </button>
                    ))
                }
            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Проекты {project?.n}. {project?.title} </h5>
                        </div>
                        <div className="modal-body">
                            <h5>Проекты {project?.n}. {project.title}</h5>
                            <p>{project?.body}</p>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Projects