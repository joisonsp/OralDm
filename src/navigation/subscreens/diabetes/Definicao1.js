import * as React from 'react';
import { ScrollView, Text, TouchableOpacity, Dimensions, View, Vide } from 'react-native';
import { FontSizeContext } from '../../../assets/utils/FontSizeContext';
import { LanguageContext } from '../../../assets/utils/LanguageContext';
import { createDynamicStyles } from '../../../assets/style/main'; // Importa a função para gerar estilos dinâmicos
import { HeaderContent } from '../HeaderContent';
import Video from 'react-native-video';

export default function Definicao1({ navigation }) {
    const screenWidth = Dimensions.get('window').width;

    return (
        <FontSizeContext.Consumer>
            {({ fontSizes }) => {
                const styles = createDynamicStyles(fontSizes); // Cria os estilos dinamicamente

                return (
                    <LanguageContext.Consumer>
                        {({ language }) => {
                            const contentTextPt = `O Diabetes Mellitus é uma doença crônica não transmissível caracterizada pela grande quantidade de glicose (açúcar) no sangue.\n\nEssa condição é provavelmente da má produção ou absorção de um hormônio chamado insulina. A insulina, produzida no pâncreas, é responsável por regular os níveis de glicose no sangue e assim garantir energia para o nosso corpo.\n\nO Diabetes Mellitus se classifica em dois grandes grupos:\n\nDiabetes Tipo 1 e Tipo 2\n\nVídeo explicativo abaixo:\n\n`;
                            const contentTextEn = `Diabetes Mellitus is a chronic non-communicable disease characterized by a high amount of glucose (sugar) in the blood.\n\nThis condition is likely due to poor production or absorption of a hormone called insulin. Insulin, produced in the pancreas, is responsible for regulating blood glucose levels and thus providing energy to our body.\n\nDiabetes Mellitus is classified into two main groups:\n\nType 1 and Type 2 Diabetes\n\nExplanatory video below:\n\n`;
                            const contentText = language === 'pt' ? contentTextPt : contentTextEn;

                            const backButtonLabel = language === 'pt' ? 'VOLTAR' : 'BACK';

                            return (
                                <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                                    <HeaderContent
                                        title={language === 'pt' ? 'O QUE É\nDIABETES?' : 'WHAT IS\nDIABETES?'}
                                        imageSource={require('../../../assets/img/PAGINA_CARD/DIABETES_O_QUE_É_DIABETES_PAGE_IMAGE.png')}
                                        contentText={contentText}
                                    />

                                    
                                    <View style={{ alignItems: 'center', marginTop: -90 }}>
                                        <Video
                                            source={require('../../../assets/videos/VIDEO_1_-_O_QUE_É_DIABETES.mp4')}
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
