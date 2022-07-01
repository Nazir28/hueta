import React, { useState } from 'react'
import MainLayout from '../layouts/main-layout'

const codeks = [
    { body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ad quaerat eos vitae nam aliquid non laborum quod omnis inventore!' },
    { body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ad quaerat eos vitae nam aliquid non laborum quod omnis inventore!' },
    { body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ad quaerat eos vitae nam aliquid non laborum quod omnis inventore!' },
    { body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ad quaerat eos vitae nam aliquid non laborum quod omnis inventore!' },
    { body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ad quaerat eos vitae nam aliquid non laborum quod omnis inventore!' },
    { body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ad quaerat eos vitae nam aliquid non laborum quod omnis inventore!' },
    { body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ad quaerat eos vitae nam aliquid non laborum quod omnis inventore!' },
    { body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ad quaerat eos vitae nam aliquid non laborum quod omnis inventore!' },
]

function Codeks() {
    return (
        <MainLayout>
            <h1>Кодексы</h1>
            <div className='main-nav mt-4' style={{gridTemplateColumns: '1fr'}}>
                {
                    codeks.map((el, idx) => (
                        <a href='' className='btn' data-bs-toggle="modal" data-bs-target="#exampleModal" key={idx}>
                            {el.body}
                        </a>
                    ))
                }
            </div>
        </MainLayout>
    )
}

export default Codeks