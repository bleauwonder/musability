import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from 'constants/styles';
import { TouchableWithoutFeedback } from 'react-native';
const NETFLIX_LOGO = require('../../../assets/images/Industry-City10.jpg');

const Container = styled.View`
  display: flex;
  flex-direction: row;
  height: 60;
  align-items: center;
  background-color: '#851414';
  justify-content: space-between;
`;

const IconContainer = styled.View`
  padding-left: 10;
  padding-right: 10;
`;

const LogoContainer = styled.Image`
  width: 175;
  height: 50;
`;

class Header extends Component {
  static propTypes = {
    openDrawer: PropTypes.func.isRequired,
  };

  render() {
    const { openDrawer } = this.props;
    return (
      <Container>
        <TouchableWithoutFeedback onPress={openDrawer}>
          <IconContainer>
            <Icon name={'bars'} size={30} color={COLORS.GREY.BRIGHT_GREY} />
          </IconContainer>
        </TouchableWithoutFeedback>
        <LogoContainer source={NETFLIX_LOGO} />
        <TouchableWithoutFeedback onPress={() => {}}>
          <IconContainer>
            <Icon name={'search'} size={30} color={COLORS.GREY.BRIGHT_GREY} />
          </IconContainer>
        </TouchableWithoutFeedback>
      </Container>
    );
  }
}

export default Header;