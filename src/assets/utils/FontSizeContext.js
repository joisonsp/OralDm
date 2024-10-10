import React, { createContext, useState } from 'react';

export const FontSizeContext = createContext();

export const FontSizeProvider = ({ children }) => {
  const [fontSizes, setFontSizes] = useState({
    titleText: 18,
    subtitleText: 20,
    subScreenSubTitle: 22,
    accessButtonTitle: 18,
    subScreenTitle: 45,
    reminderText: 20,
    infoText: 18,
    contentCardText: 22,
    footerText: 15,
    accessButtonTitleSub: 18,
    contentText: 20,
  });

  const increaseFontSize = () => {
    setFontSizes((prevFontSizes) => {
      const newFontSizes = {};
      for (let key in prevFontSizes) {
        newFontSizes[key] = prevFontSizes[key] + 2; // Aumenta cada valor em 2
      }
      return newFontSizes;
    });
  };

  const decreaseFontSize = () => {
    setFontSizes((prevFontSizes) => {
      const newFontSizes = {};
      for (let key in prevFontSizes) {
        newFontSizes[key] = prevFontSizes[key] > 10 ? prevFontSizes[key] - 2 : 10; // Limite mínimo de 10
      }
      return newFontSizes;
    });
  };

  return (
    <FontSizeContext.Provider value={{ fontSizes, increaseFontSize, decreaseFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
};
