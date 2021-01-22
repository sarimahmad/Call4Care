/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

import {BLUE, RED, WHITE} from '../../helper/Color';
import {FONT, SCREEN} from '../../helper/Constant';

const SetNewPasswordStyles = {
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
    height: ${SCREEN.width / 1.77}px;
    width: ${SCREEN.width / 1.2}px;
    alignSelf: center;
  `,
  TitleText: styled.Text`
    fontSize: 30px;
    fontWeight: bold;
    marginTop: 45px;
    fontFamily: ${FONT.Poppins.bold};
    color: ${WHITE.dark};
  `,
  TextInputWrapper: styled.View`
    height: 57px;
    width: ${SCREEN.width - 40}px;
    backgroundColor: ${BLUE.textInput};
    alignSelf: center;
    marginTop: 15px;
    marginBottom: 10px;
    borderRadius: 7px;
  `,
  PasswordSendText: styled.Text`
    fontSize: 15px;
    marginTop: 10px;
    fontFamily: ${FONT.simple};
    color: ${WHITE.off};
    textAlign: center;
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
   SignInButton: styled.TouchableOpacity`
     height: 57px;
     width: 90%;
     backgroundColor: ${RED.deafult};
     alignSelf: center;
     borderRadius: 7px;
     justifyContent: center;
     alignItems: center;
     marginVertical: 30px;
    `,
    SignInButtonText: styled.Text`
      fontSize: 15px;
      fontFamily: ${FONT.Poppins.bold};
      color: ${WHITE.dark};
    `,
    SocialButton: styled.TouchableOpacity`
     height: 57px;
     width: 90%;
     alignSelf: center;
     borderRadius: 7px;
     flexDirection: row;
     alignItems: center;
     marginVertical: 30px;
     paddingLeft: 90px;
    `,
    StillNotWrapper: styled.View`
     width: 90%;
     alignSelf: center;
     flexDirection: row;
     marginTop: 5px;
   `,
   StillNotInner: styled.View`
     flexDirection: row;
     flex: 1;
     alignItems: center;
   `,
   StillNotText: styled.Text`
     fontSize: 15px;
     fontFamily: ${FONT.simple};
     color: ${WHITE.off};
     paddingLeft: 10px;
   `,
};

export default SetNewPasswordStyles;
