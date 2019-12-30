import React, { Component } from 'react';
import ProductItemMng from '../components/ProductItemMng';

class ProductListMngPage extends Component {
  render () {
    return (
      <div className="section product_list_mng">
        <div className="container-fluid">
          <a className="btn btn-primary mb-15" href="/product-mng/add">Thêm sản phẩm</a>
          <div className="box_product_control mb-15">
            <div className="row">
              <div className="col-xs-6 box_search">
                <form>
                  <div className="search_wrp mb-10">
                    <div className="input-group"><input type="text" name="keyword" className="form-control" placeholder="Nhập từ khóa..." defaultValue="samsung" /><span className="input-group-btn"><button className="btn btn-primary" type="button"><i className="fa fa-search mr-5" />Tìm</button></span></div>
                    <button type="button" className="btn btn-default btn_clear"><i className="fa fa-close" /></button>
                  </div>
                  <div className>Bạn đang tìm kiếm: "<strong>samsung</strong>"</div>
                </form>
              </div>
              <div className="col-xs-6 box_change_pagelimit">
                Hiển thị
                <select className="form-control">
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
                sản phẩm
              </div>
            </div>
          </div>
          <div className="box_tbl_list">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th className="text-center">STT</th>
                  <th className="text-center">Ảnh</th>
                  <th className="text-center">Tên sản phẩm</th>
                  <th className="text-center">Giá gốc</th>
                  <th className="text-center">Giảm giá</th>
                  <th className="text-center">Giá bán</th>
                  <th className="text-center">Xếp hạng</th>
                  <th className="text-center">Mô tả</th>
                  <th className="text-center">Thương hiệu</th>
                  <th className="text-center">Số lượng <br />trong kho</th>
                  <th className="text-center">Lượt xem</th>
                  <th className="text-center">Hành động</th>
                </tr>
              </thead>
              <tbody>
                  <ProductItemMng />
              </tbody>
            </table>
          </div>
          <div className="box_pagination">
            <div className="row">
              <div className="col-sm-6 box_pagination_info">
                <p>18 Sản phẩm | Trang 1/2</p>
              </div>
              <div className="col-sm-6 text-right">
                <ul className="pagination">
                  <li><button disabled>Đầu</button></li>
                  <li><button disabled>Sau</button></li>
                  <li><button className="active">1</button></li>
                  <li><button className>2</button></li>
                  <li><button>Tiếp</button></li>
                  <li><button>Cuối</button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductListMngPage;
