import React, { Component } from 'react';

class WidgetFilterTrademark extends Component {
  render () {
    return (
      <div className="widget widget_trademark">
        <h5 className="st_title"><strong>Thương hiệu</strong></h5>
        <ul>
          <li>
            <div className="checkbox">
              <label>
                <input type="checkbox" className="cbk" name="trademark" defaultValue="Apple" />Apple (17)</label>
            </div>
          </li>
          <li>
            <div className="checkbox">
              <label>
                <input type="checkbox" className="cbk" name="trademark" defaultValue="Samsung" />Samsung (21)</label>
            </div>
          </li>
          <li>
            <div className="checkbox">
              <label>
                <input type="checkbox" className="cbk" name="trademark" defaultValue="Nokia" />Nokia (12)</label>
            </div>
          </li>
          <li>
            <div className="checkbox">
              <label>
                <input type="checkbox" className="cbk" name="trademark" defaultValue="Sony" />Sony (14)</label>
            </div>
          </li>
          <li>
            <div className="checkbox">
              <label>
                <input type="checkbox" className="cbk" name="trademark" defaultValue="Xiaomi" />Xiaomi (16)</label>
            </div>
          </li>
          <button className="btn_readmore">Xem thêm</button>
        </ul>
      </div>
    )
  }
}
export default WidgetFilterTrademark;
