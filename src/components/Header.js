import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import Menu from './Menu';

class Header extends Component {
  render() {
    return (
      <Fragment>
          <Loading />
          <Menu />
      </Fragment>
    )
  }
}

export default Header;
