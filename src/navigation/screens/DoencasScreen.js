import React from 'react';
import ReusableScreen from './Subscreen';

export default function DoencasScreen({ navigation }) {
    const cardsData = [
        {
            imageSource: {
                pt: require('../../assets/img/PAGINA_CARD/doencas/DOENÇAS_GENGIVITE_CARD_IMAGE.png'),
                eng: require('../../assets/img/PAGINA_CARD/doencas/GINGIVITIS.png'),
            },
            screenName: "Início",
        },
        {
            imageSource: {
                pt: require('../../assets/img/PAGINA_CARD/doencas/DOENÇAS_PERIODONTITE_CARD_IMAGE.png'),
                eng: require('../../assets/img/PAGINA_CARD/doencas/PERIODONTITIS.png'),
            },
            screenName: "Início",
        },
        {
            imageSource: {
                pt: require('../../assets/img/PAGINA_CARD/doencas/DOENÇAS_CÁRIE_RADICULAR_CARD_IMAGE.png'),
                eng: require('../../assets/img/PAGINA_CARD/doencas/ROOT_CARIES.png'),
            },
            screenName: "Início",
        },
        {
            imageSource: {
                pt: require('../../assets/img/PAGINA_CARD/doencas/DOENÇAS_HIPOSSALIVAÇÃO_CARD_IMAGE.png'),
                eng: require('../../assets/img/PAGINA_CARD/doencas/HYPOSALIVATION.png'),
            },
            screenName: "Início",
        },
        {
            imageSource: {
                pt: require('../../assets/img/PAGINA_CARD/doencas/DOENÇAS_XEROSTOMIA_CARD_IMAGE.png'),
                eng: require('../../assets/img/PAGINA_CARD/doencas/DOENÇAS_XEROSTOMIA_CARD_IMAGE.png'),
            },
            screenName: "Início",
        },
        {
            imageSource: {
                pt: require('../../assets/img/PAGINA_CARD/doencas/DOENÇAS_CANDIDÍASE_ORAL_CARD_IMAGE.png'),
                eng: require('../../assets/img/PAGINA_CARD/doencas/ORAL_CANDIDIASIS.png'),
            },
            screenName: "Início",
        },
        {
            imageSource: {
                pt: require('../../assets/img/PAGINA_CARD/doencas/DOENÇAS_HALITOSE_CARD_IMAGE.png'),
                eng: require('../../assets/img/PAGINA_CARD/doencas/HALITOSIS.png'),
            },
            screenName: "Início",
        },
        {
            imageSource: {
                pt: require('../../assets/img/PAGINA_CARD/doencas/DOENÇAS_CÂNCER_BUCAL_CARD_IMAGE.png'),
                eng: require('../../assets/img/PAGINA_CARD/doencas/MOUTH_CANCER.png'),
            },
            screenName: "Início",
        }
        
    ];

    return (
        <ReusableScreen
            navigation={navigation}
            screenTitle="DOENÇAS"
            cardsData={cardsData}
        />
    );
}
