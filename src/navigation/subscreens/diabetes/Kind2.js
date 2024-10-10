import * as React from 'react';
import { ScrollView, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { FontSizeContext } from '../../../assets/utils/FontSizeContext';
import { LanguageContext } from '../../../assets/utils/LanguageContext';
import { createDynamicStyles } from '../../../assets/style/main';
import { HeaderContent, ContentleftImg, ContentWithoutImg, ContentRightImg } from '../HeaderContent';

export default function Kind2({ navigation }) {
    const screenWidth = Dimensions.get('window').width;

    return (
        <FontSizeContext.Consumer>
            {({ fontSizes }) => {
                const styles = createDynamicStyles(fontSizes);

                return (
                    <LanguageContext.Consumer>
                        {({ language }) => {
                            // Texto baseado no idioma
                            const contentTextPt = `Existem dois tipos principais de diabetes:`;
                            const contentTextEn = `There are two main types of diabetes:`;
                            const contentText = language === 'pt' ? contentTextPt : contentTextEn;

                            const backButtonLabel = language === 'pt' ? 'VOLTAR' : 'BACK';

                            return (
                                <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                                    <HeaderContent
                                        title={language === 'pt' ? 'TIPOS DE DIABETES' : 'TYPES OF DIABETES'}
                                        imageSource={require('../../../assets/img/PAGINA_CARD/DIABETES_TIPOS_DE_DIABETES_PAGE_IMAGE.png')}
                                        contentText={contentText}
                                    />

                                    <ContentleftImg
                                        title={language === 'pt' ? 'Diabetes Tipo I' : 'Type I Diabetes'}
                                        imageSource={require('../../../assets/img/ILUSTRACOES/i_dentista_1.png')}
                                        contentText={language === 'pt' 
                                            ? 'Tipo mais raro, cerca de 5 a 10 % dos casos, provocados por uma resposta imune que destrói as células do pâncreas que é mais comum crianças e adolescentes.'
                                            : 'Rarer type, accounting for about 5-10% of cases, caused by an immune response that destroys pancreatic cells, more common in children and adolescents.'}
                                    />

                                    <ContentRightImg
                                        title={language === 'pt' ? 'Diabetes Tipo II' : 'Type II Diabetes'}
                                        imageSource={require('../../../assets/img/ILUSTRACOES/i_dentista_3.png')}
                                        contentText={language === 'pt' 
                                            ? 'Tipo mais comum, cerca de 90% dos casos, geralmente associada à obesidade. Provocada por uma resistência do corpo à insulina.'
                                            : 'Most common type, accounting for about 90% of cases, often associated with obesity. Caused by the body’s resistance to insulin.'}
                                    />

                                    <ContentleftImg
                                        title={language === 'pt' ? 'Diabetes Gestacional' : 'Gestational Diabetes'}
                                        imageSource={require('../../../assets/img/ILUSTRACOES/i_dentista_2.png')}
                                        contentText={language === 'pt'
                                            ? 'Está relacionado ao bloqueio da ação da insulina por outros hormônios produzidos na gravidez.'
                                            : 'It is related to the blocking of insulin action by other hormones produced during pregnancy.'}
                                    />

                                    <ContentWithoutImg
                                        title={language === 'pt' ? 'Diabetes associadas a Síndromes' : 'Syndrome-Associated Diabetes'}
                                        contentText={language === 'pt'
                                            ? 'Muitas síndromes genéticas podem se associar ao desenvolvimento do diabetes, como resultado da resistência insulínica, baixa insulina e de deficiências de vitaminas.'
                                            : 'Many genetic syndromes can be associated with diabetes development, resulting from insulin resistance, low insulin, and vitamin deficiencies.'}
                                    />

                                    <Text style={styles.contentCardText}>
                                        {language === 'pt' ? 'Podemos citar:' : 'Examples include:'}
                                    </Text>

                                    <ContentRightImg
                                        title=""
                                        imageSource={require('../../../assets/img/ILUSTRACOES/i_dentista_4.png')}
                                        contentText={language === 'pt'
                                            ? 'Síndrome de Wolfran, Prader-Will, Síndrome dos Ovários Policísticos, Down, Klinefelter e outras.'
                                            : 'Wolfran Syndrome, Prader-Willi, Polycystic Ovary Syndrome, Down, Klinefelter, and others.'}
                                    />

                                    <ContentRightImg
                                        title={language === 'pt' ? 'Diabetes associadas a medicamentos' : 'Drug-Associated Diabetes'}
                                        imageSource={require('../../../assets/img/ILUSTRACOES/i_medico.png')}
                                        contentText={language === 'pt'
                                            ? 'Medicamentos como corticóides, hormônios e alguns antiinflamatórios se utilizados por longo prazo podem causar diabetes.'
                                            : 'Drugs such as corticosteroids, hormones, and some anti-inflammatories can cause diabetes if used long-term.'}
                                    />

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
