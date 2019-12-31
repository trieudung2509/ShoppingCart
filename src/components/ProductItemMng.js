import React, { Component } from 'react';

class ProductItemMng extends Component {
  render() {
    let { product } = this.props;
    return (
      <tr>
        <td className="col_order text-center">{product.id}</td>
        <td className="col_photo text-center"><a className="over" href="/product-detail/samsung-galaxy-j8-3gb32gb-vang.16"><img src={product.photo} alt="Samsung Galaxy J8 3GB/32GB Vàng" width={80} /></a></td>
        <td className="col_name"><a className="product_title" href="/product-detail/samsung-galaxy-j8-3gb32gb-vang.16">{product.name}</a></td>
        <td className="col_price_org text-center">{product.price_original}đ</td>
        <td className="col_discount text-center ws_nowrap">-{product.discount}%</td>
        <td className="col_price_sale text-center">{parseInt(product.price_original*(100-product.discount)/100)}đ</td>
        <td className="col_rating text-center">{product.rating}</td>
        <td className="col_description">{product.description}<button className="btn_readmore">Xem thêm</button>
        </td>
        <td className="col_trademark text-center">{product.trademark}</td>
        <td className="col_inventory text-center ws_nowrap">{product.inventory}</td>
        <td className="col_count_view text-center ws_nowrap">{product.count_view}</td>
        <td className="col_action text-center"><a className="btn btn-success" href="/product-mng/16/edit"><i className="fa fa-pencil mr-5" />Sửa</a>&nbsp;<button type="button" className="btn btn-danger"><i className="fa fa-trash mr-5" />Xóa</button></td>
      </tr>
    )
  }
}

export default ProductItemMng;
