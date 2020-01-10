import React, { Component } from 'react';
import { Link }  from 'react-router-dom';
 class ProductItem extends Component {
   toSlug = (str) => {
		// Chuyển hết sang chữ thường
		str = str.toLowerCase();

		// xóa dấu
		str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
		str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
		str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
		str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
		str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
		str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
		str = str.replace(/(đ)/g, 'd');

		// Xóa ký tự đặc biệt
		str = str.replace(/([^0-9a-z-\s])/g, '');

		// Xóa khoảng trắng thay bằng ký tự -
		str = str.replace(/(\s+)/g, '-');

		// xóa phần dự - ở đầu
		str = str.replace(/^-+/g, '');

		// xóa phần dư - ở cuối
		str = str.replace(/-+$/g, '');

		// return
		return str;
	}

  showPrice = (price_original, discount) => {
    if(discount > 0) {
			return (
				<p className="product_price">
					<strong className="price_sale">{parseInt(price_original*(100-discount)/100)}đ</strong>&nbsp;
					<strike className="price_original"><small>{price_original}đ</small></strike>&nbsp;
					<span className="discount label label-danger">-{discount}%</span>
				</p>
			);
		} else {
			return (
				<p className="product_price">
					<strong className="price_sale">{parseInt(price_original*(100-discount)/100)}đ</strong>&nbsp;
				</p>
			);
		}
  }
  render() {
    var { product } = this.props;
    var toSlugName = this.toSlug(product.name);
    return (
      <div className="col-sm-4 col-lg-3 product_item">
        <div className="thumbnail">
          <Link className="product_thumb over" to={`/product-detail/${toSlugName}.${product.id}`}><img src={product.photo} alt={product.name} /></Link>
          <div className="caption">
            <h3 className="product_title">
            <Link to={`/product-detail/${toSlugName}.${product.id}`}>{ product.name }</Link>
            </h3>
            <p className="product_trademark mb-5">Thương hiệu: <span>{ product.trademark }</span></p>
            { this.showPrice(product.price_original, product.discount) }
            <div className="product_rating mb-15">
              <ul>
                <li><i className="fa fa-star active" /></li>
                <li><i className="fa fa-star active" /></li>
                <li><i className="fa fa-star active" /></li>
                <li><i className="fa fa-star active" /></li>
                <li><i className="fa fa-star active" /></li>
              </ul>
            </div>
            <p className="product_addtocart text-right">
              <button type="button" className="btn btn-primary" data-toggle="tooltip" data-placement="top" data-original-title="Thêm vào giỏ hàng"><i className="fa fa-cart-plus" aria-hidden="true" /></button>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default ProductItem;
