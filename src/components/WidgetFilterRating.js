import React, { Component } from 'react';

class WidgetFilterRating extends Component {
  render () {
    return (
      <div className="widget widget_rating">
        <h5 className="st_title"><strong>Đánh giá</strong></h5>
        <ul>
          <li>
            <div className="radio">
              <label>
                <input type="radio" className="cbk" name="rating" defaultValue={5} />
                <div className="product_rating">
                  <ul>
                    <li><i className="fa fa-star active" /></li>
                    <li><i className="fa fa-star active" /></li>
                    <li><i className="fa fa-star active" /></li>
                    <li><i className="fa fa-star active" /></li>
                    <li><i className="fa fa-star active" /></li>
                  </ul><span className="title hidden">trở lên</span>&nbsp;</div>(19)</label>
            </div>
          </li>
          <li>
            <div className="radio">
              <label>
                <input type="radio" className="cbk" name="rating" defaultValue={4} />
                <div className="product_rating">
                  <ul>
                    <li><i className="fa fa-star active" /></li>
                    <li><i className="fa fa-star active" /></li>
                    <li><i className="fa fa-star active" /></li>
                    <li><i className="fa fa-star active" /></li>
                    <li><i className="fa fa-star" /></li>
                  </ul><span className="title">trở lên</span>&nbsp;</div>(39)</label>
            </div>
          </li>
          <li>
            <div className="radio">
              <label>
                <input type="radio" className="cbk" name="rating" defaultValue={3} />
                <div className="product_rating">
                  <ul>
                    <li><i className="fa fa-star active" /></li>
                    <li><i className="fa fa-star active" /></li>
                    <li><i className="fa fa-star active" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                  </ul><span className="title">trở lên</span>&nbsp;</div>(66)</label>
            </div>
          </li>
          <li>
            <div className="radio">
              <label>
                <input type="radio" className="cbk" name="rating" defaultValue={2} />
                <div className="product_rating">
                  <ul>
                    <li><i className="fa fa-star active" /></li>
                    <li><i className="fa fa-star active" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                  </ul><span className="title">trở lên</span>&nbsp;</div>(77)</label>
            </div>
          </li>
          <li>
            <div className="radio">
              <label>
                <input type="radio" className="cbk" name="rating" defaultValue={1} />
                <div className="product_rating">
                  <ul>
                    <li><i className="fa fa-star active" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                  </ul><span className="title">trở lên</span>&nbsp;</div>(91)</label>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
export default WidgetFilterRating;
