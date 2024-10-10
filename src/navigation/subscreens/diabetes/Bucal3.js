import * as React from 'react';
import { ScrollView, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { FontSizeContext } from '../../../assets/utils/FontSizeContext';
import { LanguageContext } from '../../../assets/utils/LanguageContext';
import { createDynamicStyles } from '../../../assets/style/main';
import { HeaderContent, ContentleftImg, ContentWithoutImg, ContentRightImg } from '../HeaderContent';
import Video from 'react-native-video';

export default function Bucal3({ navigation }) {
    const screenWidth = Dimensions.get('window').width;

    return (
        <FontSizeContext.Consumer>
            {({ fontSizes }) => {
                const styles = createDynamicStyles(fontSizes);

                return (
                    <LanguageContext.Consumer>
                        {({ language }) => {
                            // Conteúdo dinâmico de acordo com o idioma
                            const contentTextPt = `O Diabetes é considerado fator de risco para várias doenças devido as alterações que ocorrem no corpo, e que permitem uma baixa na defesa imunológica.\n\nAs infecções bucais tornam-se mais frequentes em pacientes diabéticos. Como por exemplo:`;
                            const contentTextEn = `Diabetes is considered a risk factor for several diseases due to changes in the body, leading to a weakened immune defense.\n\nOral infections become more frequent in diabetic patients. For example:`;
                            const contentText = language === 'pt' ? contentTextPt : contentTextEn;

                            const backButtonLabel = language === 'pt' ? 'VOLTAR' : 'BACK';

                            return (
                                <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                                    <HeaderContent
                                        title={language === 'pt' ? 'DIABETES E SAÚDE BUCAL' : 'DIABETES AND ORAL HEALTH'}
                                        imageSource={require('../../../assets/img/PAGINA_CARD/DIABETES_DIABETES_E_SAÚDE_BUCAL_PAGE_IMAGE.png')}
                                        contentText={contentText}
                                    />

                                    <ContentleftImg
                                        title={language === 'pt' ? 'Candidíase oral' : 'Oral Candidiasis'}
                                        imageSource={require('../../../assets/img/ILUSTRACOES/i_dentista_1.png')}
                                        contentText={language === 'pt'
                                            ? 'Infecção provocada pelo excesso de fungo Candida albicans na boca;'
                                            : 'Infection caused by the overgrowth of the fungus Candida albicans in the mouth;'}
                                    />

                                    <ContentleftImg
                                        title={language === 'pt' ? 'Xerostomia' : 'Xerostomia'}
                                        imageSource={require('../../../assets/img/ILUSTRACOES/i_dentista_3.png')}
                                        contentText={language === 'pt'
                                            ? 'Sensação de boca seca, a qual também pode ser causada pelo uso de medicamentos;'
                                            : 'Dry mouth sensation, which can also be caused by medication use;'}
                                    />

                                    <ContentleftImg
                                        title={language === 'pt' ? 'Periodontite' : 'Periodontitis'}
                                        imageSource={require('../../../assets/img/ILUSTRACOES/i_dentista_2.png')}
                                        contentText={language === 'pt'
                                            ? 'O diabetes dificulta o tratamento periodontal e vice-versa.'
                                            : 'Diabetes makes periodontal treatment difficult and vice versa.'}
                                    />

                                    <ContentleftImg
                                        title={language === 'pt' ? 'Saliva viscosa' : 'Thick Saliva'}
                                        imageSource={require('../../../assets/img/ILUSTRACOES/i_dentista_2.png')}
                                        contentText={language === 'pt'
                                            ? 'Saliva com aspecto espesso;'
                                            : 'Thick, viscous saliva;'}
                                    />

                                    <ContentWithoutImg
                                        title={language === 'pt' ? 'Importante:' : 'Important:'}
                                        contentText={language === 'pt'
                                            ? 'O acompanhamento do cirurgião-dentista é fundamental, oferecendo um bom tratamento e enfatizando o cuidado no controle desses casos.'
                                            : 'The follow-up by a dentist is essential, providing good treatment and emphasizing the importance of control in these cases.'}
                                    />

                                    <Text style={styles.contentCardText}>
                                        {language === 'pt' ? 'Vídeo explicativo abaixo:' : 'Explanatory video below:'}
                                    </Text>

                                    <View style={{ alignItems: 'center', marginTop: 0, alignItems: 'center' }}>
                                        <Video 
                                            source={require('../../../assets/videos/VIDEO_3_-_COMO_CONTROLAR_O_DIABETES.mp4')}
                                            style={{ width: screenWidth * 0.9, height: screenWidth * 0.6 }}
                                            controls={true}
                                            resizeMode="contain"
                                        />
                                    </View> 

                                    <TouchableOpacity
                                        style={[styles.accessButton, styles.cardContainer]}
                                        onPress={() => navigation.navigate("Diabetes")}
                                    >
                                        <Text style={styles.accessButtonTitle}>{backButtonLabel}</Text>
                                    </TouchableOpacity>
                                </ScrollView>
                            );
                        }}
                    </LanguageContext.Consumer>
                );
            }}
        </FontSizeContext.Consumer>
    );
}
