import React, { Component } from 'react';

class ProductItemMng extends Component {
  render() {
    return (
      <tr>
        <td className="col_order text-center">1</td>
        <td className="col_photo text-center"><a className="over" href="/product-detail/samsung-galaxy-j8-3gb32gb-vang.16"><img src="https://via.placeholder.com/680x460" alt="Samsung Galaxy J8 3GB/32GB Vàng" width={80} /></a></td>
        <td className="col_name"><a className="product_title" href="/product-detail/samsung-galaxy-j8-3gb32gb-vang.16">Samsung Galaxy J8 3GB/32GB Vàng</a></td>
        <td className="col_price_org text-center">75đ</td>
        <td className="col_discount text-center ws_nowrap">-12%</td>
        <td className="col_price_sale text-center">66đ</td>
        <td className="col_rating text-center">4</td>
        <td className="col_description">- Màn hình: 6.0 inches
          - HĐH: Android 8.0 (Oreo)
          - CPU:...<button className="btn_readmore">Xem thêm</button>
        </td>
        <td className="col_trademark text-center">Samsung</td>
        <td className="col_inventory text-center ws_nowrap">113</td>
        <td className="col_count_view text-center ws_nowrap">14</td>
        <td className="col_action text-center"><a className="btn btn-success" href="/product-mng/16/edit"><i className="fa fa-pencil mr-5" />Sửa</a>&nbsp;<button type="button" className="btn btn-danger"><i className="fa fa-trash mr-5" />Xóa</button></td>
      </tr>
    )
  }
}

export default ProductItemMng;
