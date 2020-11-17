/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import {BLACK, PURPLE, RED, WHITE} from '../../helper/Color';
import {FONT, SCREEN} from '../../helper/Constant';
const TypeUserStyles = {
  WrapperViewVertical: styled.View`
    flex: 1;
    justifyContent: center;
    backgroundColor: ${WHITE.dark};
  `,
  SafeView: styled.SafeAreaView`
    flex: 1px;
  `,
  Scroll: styled.ScrollView`
    
  `,
  ChooseText: styled.Text`
    fontSize: 15px;
    fontFamily: ${FONT.SourceSansPro.regular};
    alignSelf: center;
  `,
  Call4CareText: styled.Text`
    fontFamily: ${FONT.Poppins.semi_bold};
    fontSize: 30px;
    alignSelf: center;
    margin-top: 5px;
  `,
  RedLineViewWrapper: styled.View`
    height: 1px;
    width: 100px;
    alignSelf: center;
    backgroundColor: ${BLACK.placeholder};
    marginTop: 10px;
  `,
  RedLineInnerView: styled.View`
    height: 1px;
    alignSelf: center;
    backgroundColor: ${RED.deafult};
    width: 70px;
  `,
  DocImage: styled.Image`
    height: 200px;
    width: 200px;
    alignSelf: center;
    resizeMode: contain;
    marginTop: 15px;
  `,
  OptionMainWrapper: styled.View`
    marginTop: 15px;
    width: ${SCREEN.width - 40}px;
    alignSelf: center;
    box-shadow: 2px 3px 4px ${BLACK.dark};
    shadowOpacity: 0.2;
    shadowRadius: 1px;
    elevation: 1;
    borderRadius: 10px;
    borderWidth: 0.5px;
    borderColor: ${BLACK.placeholder};
  `,
  OptionWrapper: styled.View`
    height: ${SCREEN.width / 1.5}px;
    width: ${SCREEN.width - 40}px;
    alignSelf: center;
    justifyContent: center;
    alignItems: center;
    borderWidth: 0.5px;
    borderColor: ${BLACK.placeholder};
  `,
  ContinueBtn: styled.TouchableOpacity`
    minHeight: 45px;
    width: 85%;
    borderRadius: 5px;
    alignItems: center;
    alignSelf: center;
    backgroundColor: ${PURPLE.default};
    marginTop: 50px;
    justifyContent: center;
    alignItems: center;
    padding: 10px;
  `,
  ContinueBtnText: styled.Text`
    fontSize: 15px;
    fontFamily: ${FONT.Poppins.bold};
    color: ${WHITE.dark};
  `,
};

export default TypeUserStyles;
