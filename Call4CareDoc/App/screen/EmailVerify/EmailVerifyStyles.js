/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

import {BLUE, RED, WHITE} from '../../helper/Color';
import {FONT, SCREEN} from '../../helper/Constant';

const EmailVerifyStyles = {
  WrapperViewVertical: styled.View`
    flex: 1;
    backgroundColor: ${BLUE.app};
  `,
  SafeView: styled.SafeAreaView`
    flex: 1;
    justifyContent: center;
    alignItems: center;
  `,
  TopImage: styled.Image`
    height: ${SCREEN.width / 1.62}px;
    width: ${SCREEN.width / 1.2}px;
    alignSelf: center;
  `,
  TitleText: styled.Text`
    fontSize: 30px;
    marginTop: 45px;
    fontFamily: ${FONT.Poppins.bold};
    color: ${WHITE.dark};
  `,
  PasswordSendText: styled.Text`
    fontSize: 15px;
    marginTop: 10px;
    fontFamily: ${FONT.SourceSansPro.regular};
    color: ${WHITE.off};
    textAlign: center;
    paddingHorizontal: 10px;
    lineHeight: 23px;
  `,
  EmailText: styled.Text`
    fontSize: 15px;
    fontFamily: ${FONT.SourceSansPro.regular};
    color: ${BLUE.off};
  `,
   SignInButton: styled.TouchableOpacity`
     height: 57px;
     width: ${SCREEN.width - 40}px;
     backgroundColor: ${RED.deafult};
     alignSelf: center;
     borderRadius: 7px;
     justifyContent: center;
     alignItems: center;
     marginTop: 30px;
     marginBottom: 10px;
    `,
    SignInButtonText: styled.Text`
      fontSize: 15px;
      fontFamily: ${FONT.Poppins.bold};
      color: ${WHITE.dark};
    `,
    ResendText: styled.Text`
      fontFamily: ${FONT.Poppins.regular};
      alignSelf: flex-end;
      textDecorationLine: underline;
      fontSize: 15px;
      color: ${WHITE.dark};
      marginRight: 20px;
    `,
};

export default EmailVerifyStyles;
