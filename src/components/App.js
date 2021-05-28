import React, { useState } from 'react'
import UserCreate from './UserCreate'
import { LanguageProvider } from '../contexts/LanguageContext'
import {ColorProvider} from '../contexts/ColorContext'

const App = () => {

    const [language, setLanguage] = useState('english')
    const [color, setColor] = useState('red')

    const onLanguageChange = (language, color) => {
        setLanguage(language);
        setColor(color);
        //set color based on flags
    }

    return (
        <div className='ui container'>
            <div>
                <h3>Select a language :  </h3>
                
                 <i className='flag us' onClick={()=>onLanguageChange('english', 'red')}/>
                <i className='flag nl' onClick={() => onLanguageChange('dutch', 'green')} />
                
            </div>
            <br />
             <LanguageProvider value={language}>
            <ColorProvider value = {color}>    
                    <UserCreate></UserCreate>
            </ColorProvider>
            </LanguageProvider>
        </div>
    )
}

export default App;

 