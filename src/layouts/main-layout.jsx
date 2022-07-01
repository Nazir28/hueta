import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Lang from '../components/lang'
import { langes, path } from '../consts'
import { setLang } from '../store/reducer'

function MainLayout({children}) {
    const { lang } = useSelector(state => state.main)

    const dispatch = useDispatch()

    if(lang === '' )
    return <Lang /> 

    return (
        <div className='main-layout container py-4'>
            <div className='d-flex justify-content-between align-items-center mb-5'>
                <div className='d-flex align-items-center logo-wrapper'>
                    <div>
                        <Link to={path.MAIN}><img src="/image/logo.png" width={90} /></Link>
                    </div>
                    <div className='ps-4'>
                        <p>ИСПОЛНИТЕЛЬНЫЙ ОРГАН ГОСУДАРСТВЕННОЙ<br />
                            ВЛАСТИ ГОРОДА ДУШАНБЕ</p>
                        <div className="line"></div>
                        <p>ИНВЕСТИЦИОННЫЕ ВОЗМОЖности<br /> ГОРОДА ДУШАНБЕ</p>
                    </div>
                </div>
                <ul>
                    {
                        langes.map((el) => (
                            <li key={el.slug} onClick={() => dispatch(setLang(el.code))} className={lang === el.code ? 'active': '' }>
                                <img src={el.url} alt="" />
                                <span>{el.slug}</span>
                            </li>
                        ))
                    }

                </ul>
            </div>
            {children}
        </div>
    )
}

export default MainLayout