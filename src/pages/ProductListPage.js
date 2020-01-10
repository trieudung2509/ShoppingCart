import React, { Component } from 'react';
import WidgetFilterTrademark from '../components/WidgetFilterTrademark';
import WidgetFilterPrice from '../components/WidgetFilterPrice';
import WidgetFilterRating from '../components/WidgetFilterRating';
import ProductSearchControl from '../components/ProductSearchControl';
import ProductSortControl from '../components/ProductSortControl';
import ProductItem from '../components/ProductItem';
import Pagination from '../components/Pagination';
import { connect } from 'react-redux';
import { actFetchProductsRequest } from '../actions/index';
class ProductListPage extends Component {
  constructor (props) {
    super(props);
		this.state = {
			totalRecords: '',
			totalPages: '',
			pageLimit: '',
			currentPage: '',
			startIndex: '',
			endIndex: ''
		};
  }
  componentDidMount() {
    this.props.fetchAllProducts();
  }
  showProducts = (products) => {
      var result = null;
      if (products.length > 0) {
        result = products.map((product,index) => {
          return (
              <ProductItem
                key = {index}
                product = {product}
              />
          )
        })
      }
  }

  onChangePage = (data) => {
		this.setState({
			totalPages: data.totalPages,
			currentPage: data.page,
			startIndex: data.startIndex,
			endIndex: data.endIndex
		});
	}
    render() {
      var { products,keyword } = this.props;
      var {	totalPages,
					currentPage,
					pageLimit,
					startIndex,
					endIndex } = this.state;
          var rowsPerPage = [];
          // Tìm kiếm
		if(keyword) {
			products = products.filter((product) => {
				return  product.name.toLowerCase().indexOf(keyword.trim().toLowerCase()) !== -1
			});
		}
    rowsPerPage = products.slice(startIndex, endIndex + 1);

      return (
        <div className="section product_list">
          <div className="container">
            <div className="row">
              <div className="col-sm-2">
                <div className="widget widget_title_search_filter">
                  <p><i className="fa fa-filter" /> BỘ LỌC TÌM KIẾM</p>
                </div>
                <WidgetFilterTrademark />
                <WidgetFilterPrice />
                <WidgetFilterRating />
              </div>
              <div className="col-sm-10">
                <div className="box_product_control mb-15">
                  <div className="row">
                    <ProductSearchControl />
                    <ProductSortControl />
                    <div className="col-xs-3 box_pagination_info">96 Sản phẩm | Trang 2/8</div>
                  </div>
                </div>
                <div className="box_product_list">
                  <div className="row">
                    { this.showProducts(rowsPerPage) }
                  </div>
                </div>
                <div className="box_pagination text-center">
                    <Pagination
    									totalRecords={products.length}
    									pageLimit={pageLimit || 12}
    									initialPage={1}
    									pagesToShow={6}
    									onChangePage={this.onChangePage}
    								/>
                </div>
              </div>
            </div>
          </div>
        </div>

      )
    }
}
const mapStateToProps = (state) => {
  return {
    products : state.products,
    keyword : state.search
  }
}

const mapDispatchToProps = (dispatch,props) => {
  return {
    fetchAllProducts : () => {
      dispatch(actFetchProductsRequest());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductListPage);
