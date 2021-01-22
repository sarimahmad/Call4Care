/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

import {BLUE, RED, WHITE} from '../../helper/Color';
import {FONT, SCREEN} from '../../helper/Constant';

const SignInStyles = {
  WrapperViewVertical: styled.View`
    flex: 1;
    backgroundColor: ${BLUE.app};
  `,
  SafeView: styled.SafeAreaView`
    flex: 1;
  `,
  Scroll: styled.ScrollView`
   flex: 1;
  `,
  TopImage: styled.Image`
    height: ${SCREEN.width / 2.37}px;
    width: ${SCREEN.width / 1.18}px;
    alignSelf: center;
  `,
  SignInHeader: styled.Text`
    fontSize: 61px;
    alignSelf: center;
    marginVertical: 5px;
    fontFamily: ${FONT.Poppins.bold};
    color: ${WHITE.dark};
  `,
  NewUserText: styled.Text`
    fontSize: 15px;
    color: ${WHITE.off};
    fontFamily: ${FONT.SourceSansPro.regular};
    marginVertical: 5px;
    alignSelf: center;
  `,
  TextInputWrapper: styled.View`
    height: 57px;
    width: ${SCREEN.width - 40}px;
    backgroundColor: ${BLUE.textInput};
    alignSelf: center;
    marginTop: 15px;
    marginBottom: 10px;
    borderRadius: 7px;
    justifyContent: center;
  `,
  AbsoluteRightIcon: styled.View`
    right: 30px;
    justifyContent: center;
    alignItems: center;
  `,
  TextInputInner: styled.TextInput`
    height: 57px;
    width: 100%;
    backgroundColor: ${BLUE.textInput};
    alignSelf: center;
    paddingHorizontal: 20px;
    fontSize: 15px;
    color: ${WHITE.dark};
    borderRadius: 7px;
   `,
   RememberForgotWrapper: styled.View`
     width: ${SCREEN.width - 40}px;;
     alignSelf: center;
     flexDirection: row;
     marginTop: 5px;
   `,
   CheckBoxWrapper: styled.TouchableOpacity`
     width: 25px;
     height: 25px;
     justifyContent: center;
   `,
   RememberView: styled.View`
     flexDirection: row;
     flex: 1;
     alignItems: center;
   `,
   RememberMeText: styled.Text`
     fontSize: 15px;
     fontFamily: ${FONT.SourceSansPro.regular};
     color: ${WHITE.off};
     paddingLeft: 5px;
   `,
   SignInButton: styled.TouchableOpacity`
     height: 57px;
     width: ${SCREEN.width - 40}px;
     backgroundColor: ${RED.deafult};
     alignSelf: center;
     borderRadius: 7px;
     justifyContent: center;
     alignItems: center;
     marginVertical: 30px;
    `,
    SignInButtonText: styled.Text`
      fontSize: 15px;
      fontFamily: ${FONT.Poppins.bold}
      color: ${WHITE.dark};
    `,
    OrWrapper: styled.View`
      justifyContent: center;
      width: 100%;
      flexDirection: row;
    `,
    OrLineWrapper: styled.View`
      justifyContent: center;
      flex: 0.4;
    `,
    OrLineInner: styled.View`
      height: 1px;
      width: 100%;
      backgroundColor: ${WHITE.borderLight};
    `,
    OrTextWrapper: styled.View`
      flex: 0.2;
      justifyContent: center;
      alignItems: center;
    `,
    OrText: styled.Text`
      fontSize: 18px;
      color: ${WHITE.dark};
      fontFamily: ${FONT.SourceSansPro.regular};
    `,
    SocialButton: styled.TouchableOpacity`
     height: 57px;
     width: ${SCREEN.width - 40}px;
     alignSelf: center;
     borderRadius: 7px;
     flexDirection: row;
     alignItems: center;
     marginVertical: 30px;
     paddingLeft: 90px;
    `,
};

export default SignInStyles;
