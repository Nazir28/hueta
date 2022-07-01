import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { langes } from '../consts'
import { setLang } from '../store/reducer'

function Lang() {
    const {lang} = useSelector(state => state.main)
    const dispatch = useDispatch()
    const ref = useRef()
    return (
        <div className='lange'>
            <div className='d-flex align-items-center' ref={ref}>
                <div>
                    <img src="/image/logo.png" />
                </div>
                <div className='ps-5'>
                    <h3>ИСПОЛНИТЕЛЬНЫЙ ОРГАН ГОСУДАРСТВЕННОЙ<br />
                        ВЛАСТИ ГОРОДА ДУШАНБЕ</h3>
                    <div className="line"></div>
                    <h3>ИНВЕСТИЦИОННЫЕ ВОЗМОЖности<br /> ГОРОДА ДУШАНБЕ</h3>
                </div>
            </div>
            <div style={{marginTop: `calc(50vh - 250px)`}}>
                <h2>Выберите язык</h2>
                <ul>
                    {
                        langes.map(el => (
                            <li key={el.url} onClick={() => dispatch(setLang(el.code))} className={lang === el.code ? 'active': ''}>
                                <img src={el.url} alt="" />
                                <span>{el.text}</span>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </div>
    )
}

export default Lang