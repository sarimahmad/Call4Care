/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import {BLUE} from '../../helper/Color';

const SplashStyles = {
  WrapperViewVertical: styled.View`
    flex: 1;
    justifyContent: center;
    backgroundColor: ${BLUE.app};
  `,
  SafeView: styled.SafeAreaView`
    flex: 1px;
  `,
  SplashIcon: styled.Image`
    height: 100%;
    width: 100%;
    alignSelf: center;
    resizeMode: stretch;
  `,
};

export default SplashStyles;
