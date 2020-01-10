import React, { Component } from 'react';

class ProductSortControl extends Component {
  render () {
    return (
      <div className="col-xs-3 box_sort">
        <div className="dropdown dropdown_sort">
          <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sắp Xếp <i className="fa fa-caret-square-o-down ml-5" /></button>
          <ul className="dropdown-menu">
            <li><span className="sort_selected"><span className="fa fa-sort-alpha-asc pr-5">Tên A-Z</span></span>
            </li>
            <li><span className><span className="fa fa-sort-alpha-desc pr-5">Tên Z-A</span></span>
            </li>
            <li role="separator" className="divider" />
            <li><span className>Giá tăng dần</span></li>
            <li><span className>Giá giảm dần</span></li>
            <li role="separator" className="divider" />
            <li><span className>Xem nhiều</span></li>
          </ul>
        </div>
      </div>
    )
  }
}
export default ProductSortControl;
