import React from 'react';
import ReusableScreen from './Subscreen';

export default function DoencasScreen({ navigation }) {
    const cardsData = [
        {
            imageSource: {
                pt: require('../../assets/img/PAGINA_CARD/dicas/DICAS_SUSPENSÃO_DO_TABAGISMO_CARD_IMAGE.png'),
                eng: require('../../assets/img/PAGINA_CARD/dicas/STOPPING_SMOKING.png'),
            },
            screenName: "Início",
        },
        {
            imageSource: {
                pt: require('../../assets/img/PAGINA_CARD/dicas/DICAS_HÁBITOS_NOCIVOS_CARD_IMAGE.png'),
                eng: require('../../assets/img/PAGINA_CARD/dicas/HARMFUL_HABITS.png'),
            },
            screenName: "Início",
        },
        {
            imageSource: {
                pt: require('../../assets/img/PAGINA_CARD/dicas/DICAS_PRESENÇA_FAMILIAR_CARD_IMAGE.png'),
                eng: require('../../assets/img/PAGINA_CARD/dicas/FAMILY_PRESENCE.png'),
            },
            screenName: "Início",
        },
        {
            imageSource: {
                pt: require('../../assets/img/PAGINA_CARD/dicas/DICAS_ALIMENTAÇÃO_CARD_IMAGE.png'),
                eng: require('../../assets/img/PAGINA_CARD/dicas/FOOD.png'),
            },
            screenName: "Início",
        },
        {
            imageSource: {
                pt: require('../../assets/img/PAGINA_CARD/dicas/DICAS_EXERCÍCIOS_FÍSICOS_CARD_IMAGE.png'),
                eng: require('../../assets/img/PAGINA_CARD/dicas/PHYSICAL_EXERCISE.png'),
            },
            screenName: "Início",
        },
        {
            imageSource: {
                pt: require('../../assets/img/PAGINA_CARD/dicas/DICAS_CADERNETA_DO_IDOSO.png'),
                eng: require('../../assets/img/PAGINA_CARD/dicas/ELDERLY_RECORD.png'),
            },
            screenName: "Início",
        }
        
    ];

    return (
        <ReusableScreen
            navigation={navigation}
            screenTitle="DICAS"
            cardsData={cardsData}
        />
    );
}
