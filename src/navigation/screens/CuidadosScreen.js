import React from 'react';
import ReusableScreen from './Subscreen';

export default function DoencasScreen({ navigation }) {
    const cardsData = [
        {
            imageSource: {
                pt: require('../../assets/img/PAGINA_CARD/cuidados/CUIDADOS_HIGIENIZAÇÃO_BUCAL_CARD_IMAGE.jpg'),
                eng: require('../../assets/img/PAGINA_CARD/cuidados/ORAL_HYGIENE.png'),
            },
            screenName: "Início",
        },
        {
            imageSource: {
                pt: require('../../assets/img/PAGINA_CARD/cuidados/CUIDADOS_HIGIENIZAÇÃO_DAS_PRÓTESES_CARD_IMAGE.png'),
                eng: require('../../assets/img/PAGINA_CARD/cuidados/HYGIENE_OF_DENTURES.png'),
            },
            screenName: "Início",
        },
        {
            imageSource: {
                pt: require('../../assets/img/PAGINA_CARD/cuidados/CUIDADOS_CONTROLE_DO_DIABETES_CARD_IMAGE.png'),
                eng: require('../../assets/img/PAGINA_CARD/cuidados/DIABETES_CONTROL.png'),
            },
            screenName: "Início",
        },
        {
            imageSource: {
                pt: require('../../assets/img/PAGINA_CARD/cuidados/CUIDADOS_IDA_REGULAR_AO_DENTISTA_CARD_IMAGE.png'),
                eng: require('../../assets/img/PAGINA_CARD/cuidados/REGULAR_VISITS_TO_THE_DENTIST.png'),
            },
            screenName: "Início",
        }
        
    ];

    return (
        <ReusableScreen
            navigation={navigation}
            screenTitle="CUIDADOS"
            cardsData={cardsData}
        />
    );
}
