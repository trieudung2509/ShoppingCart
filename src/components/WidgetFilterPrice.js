import React, { Component } from 'react';

class WidgetFilterPrice extends Component {
  render () {
    return (
      <div className="widget widget_price">
        <h5 className="st_title"><strong>Giá sản phẩm</strong></h5>
        <ul>
          <li>
            <div className="checkbox">
              <label>
                <input type="checkbox" className="cbk" name="priceRange" defaultValue="range_01,0,20,Dưới 20đ" />Dưới 20đ (13)</label>
            </div>
          </li>
          <li>
            <div className="checkbox">
              <label>
                <input type="checkbox" className="cbk" name="priceRange" defaultValue="range_02,20,40,Từ 20đ đến 40đ" />Từ 20đ đến 40đ (11)</label>
            </div>
          </li>
          <li>
            <div className="checkbox">
              <label>
                <input type="checkbox" className="cbk" name="priceRange" defaultValue="range_03,40,60,Từ 40đ đến 60đ" />Từ 40đ đến 60đ (22)</label>
            </div>
          </li>
          <li>
            <div className="checkbox">
              <label>
                <input type="checkbox" className="cbk" name="priceRange" defaultValue="range_04,60,80,Từ 60đ đến 80đ" />Từ 60đ đến 80đ (26)</label>
            </div>
          </li>
          <li>
            <div className="checkbox">
              <label>
                <input type="checkbox" className="cbk" name="priceRange" defaultValue="range_05,80,100,Từ 80đ đến 100đ" />Từ 80đ đến 100đ (17)</label>
            </div>
          </li>
        </ul>
        <button className="btn_readmore">Xem thêm</button>
      </div>
    )
  }
}
export default WidgetFilterPrice;
