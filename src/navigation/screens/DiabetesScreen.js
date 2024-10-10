import React from 'react';
import SubScreen from './Subscreen';
import { FontSizeContext } from '../../assets/utils/FontSizeContext';
import { LanguageContext } from '../../assets/utils/LanguageContext';
import { createDynamicStyles } from '../../assets/style/main'; 

export default function DiabetesScreen({ navigation }) {
    // Definição dos dados dos cards
    const cardsData = [
        {
            imageSource: {
                pt: require('../../assets/img/PAGINA_CARD/diabetes/DIABETES_O_QUE_E_DIABETES_CARD_IMAGE.png'),
                eng: require('../../assets/img/PAGINA_CARD/diabetes/WHAT_IS_DIABETES.png'),
            },
            screenName: "Definicao1",
            label: {
                pt: 'O que é\nDiabetes?',
                en: 'What is\nDiabetes?',
            },
        },
        {
            imageSource: {
                pt: require('../../assets/img/PAGINA_CARD/diabetes/DIABETES_TIPOS_DE_DIABETES_CARD_IMAGE.png'),
                eng: require('../../assets/img/PAGINA_CARD/diabetes/TYPES_OF_DIABETES.png'),
            },
            screenName: "Kind2",
            label: {
                pt: 'Tipos de\nDiabetes',
                en: 'Types of\nDiabetes',
            },
        },
        {
            imageSource: {
                pt: require('../../assets/img/PAGINA_CARD/diabetes/MAIN_DIABETES_CARD_IMAGE.png'),
                eng: require('../../assets/img/PAGINA_CARD/diabetes/DIABETES_AND_ORAL_HEALTH.png'),
            },
            screenName: "Bucal3",
            label: {
                pt: 'Diabetes e\nSaúde Bucal',
                en: 'Diabetes and\nOral Health',
            },
        }
    ];

    return (
        <FontSizeContext.Consumer>
            {({ fontSizes }) => {
                const styles = createDynamicStyles(fontSizes); // Cria os estilos dinâmicos com base no tamanho da fonte

                return (
                    <LanguageContext.Consumer>
                        {({ language }) => (
                            <SubScreen
                                navigation={navigation}
                                screenTitle={language === 'pt' ? 'DIABETES' : 'DIABETES'}
                                cardsData={cardsData.map(card => {
                                    const imageSource = language === 'pt' ? card.imageSource.pt : card.imageSource.eng;
                                    
                                    console.log('Image source for card:', card.label, imageSource);

                                    if (!imageSource) {
                                        console.warn(`Image source is undefined for card: ${card.label}`);
                                    }

                                    return {
                                        ...card,
                                        label: language === 'pt' ? card.label.pt : card.label.en,
                                        imageSource,
                                        styles, // Passa os estilos dinâmicos para cada card
                                    };
                                })}
                            />
                        )}
                    </LanguageContext.Consumer>
                );
            }}
        </FontSizeContext.Consumer>
    );
}
