import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render () {
    return (
      <div className="container">
        <div className="text-center">
          <h1>Mua sắm trực tuyến!</h1>
          <Link to="/product-list">
            <button type="button" className="btn btn-success"> Bắt đầu mua sắm </button>
          </Link>
        </div>
      </div>
    )
  }
}
export default Home;
