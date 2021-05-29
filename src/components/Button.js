import React, { useContext } from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

const Button = () => {//render button onto ui
    const y =  useContext(LanguageContext);
    const x =  useContext(ColorContext);

    return <button className={`ui button ${x}`} >
        {y}
     </button>
}

export default Button;