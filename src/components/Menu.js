import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link className="navbar-brand" to="/">Trang chủ</Link>
        </div>
        {/* Collect the nav links, forms, and other content for toggling */}
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><Link to="/product-list">Danh sách sản phẩm</Link></li>
            <li><Link to="/product-list-mng">Quản lý sản phẩm</Link></li>
            <li><Link to="/cart">Giỏ hàng</Link></li>
          </ul>
          <CartDropdown />
        </div>{/* /.navbar-collapse */}
      </div>{/* /.container-fluid */}
      </nav>
  )
}

export default Menu;
