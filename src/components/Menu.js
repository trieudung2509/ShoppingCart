import React from 'react';
import { NavLink } from 'react-router-dom';
import CartDropdown from '../containers/CartDropdown';

const Menu = (props) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container">
        {/* Brand and toggle get grouped for better mobile display */}
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <NavLink exact className="navbar-brand" to="/" activeClassName="active">Shopping</NavLink>
        </div>
        {/* Collect the nav links, forms, and other content for toggling */}
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><NavLink exact to="/product-list" activeClassName="active">Danh sách sản phẩm</NavLink></li>
            <li><NavLink exact to="/product-list-mng" activeClassName="active">Quản lý sản phẩm</NavLink></li>
            <li><NavLink exact to="/cart" activeClassName="active">Giỏ hàng</NavLink></li>
          </ul>
          <CartDropdown />
        </div>{/* /.navbar-collapse */}
      </div>{/* /.container-fluid */}
      </nav>
  )
}

export default Menu;
