import React from 'react'

const languageContext = React.createContext('english');

export const LanguageProvider = languageContext.Provider;

 
export default languageContext;
