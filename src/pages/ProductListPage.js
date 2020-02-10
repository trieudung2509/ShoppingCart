import React, { Component } from 'react';
import WidgetFilterTrademark from '../components/WidgetFilterTrademark';
import WidgetFilterPrice from '../components/WidgetFilterPrice';
import WidgetFilterRating from '../components/WidgetFilterRating';
import ProductSearchControl from '../components/ProductSearchControl';
import ProductSortControl from '../components/ProductSortControl';
import ProductItem from '../components/ProductItem';
import Pagination from '../components/Pagination';
import { connect } from 'react-redux';
import {  actFetchProductsRequest,
          actSearchProduct,
          actSortProduct,
          actFilterTrademark,
          actClearFilter,
          actFilterPrice,
          actAddToCart,
          actFilterRating } from '../actions/index';
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
                onAddToCart = { this.onAddToCart }
              />
          )
        })
      }
      return result;
  }

  onAddToCart = (product,quantity) => {
    this.props.onAddToCart(product,quantity);
  }

  onSearch = (keyword) => {
    this.props.onSearchProduct(keyword);
  }

  onSort = (sort) => {
    this.props.onSortProduct(sort);
  }

  onFilterTrademark = (filterTrademark) => {
    this.props.onFilterTrademark(filterTrademark);
  }

  onFilterPrice = (filterPrice) => {
      this.props.onFilterPrice(filterPrice);
  }
  onShowfilterInfo = () => {
    var { filterTrademark , filterPrice,filterRating } = this.props;
    var result = [];
    if (filterTrademark.length > 0) {
      filterTrademark.map((item,index) => {
        return (
          result.push(<span key={index} className="label label-primary">{item}</span>)
        );
      });
    }

    if (filterPrice.length > 0) {
      filterPrice.map((item, index) => {
				return (
					result.push(<span key={index+844454} className="label label-success">{item.title}</span>)
				);
			});
    }

    if(filterRating !== null) {
			if (filterRating === 5) {
				result.push(<span key={9474545} className="label label-info">{filterRating} sao</span>)
			} else {
				result.push(<span key={9474545} className="label label-info">{filterRating} sao trở lên</span>)
			}
		}

    if(result.length > 0) {
      return (
        <div className="box_filter_info">
					<div className="alert alert-info" role="alert">
						Sản phẩm lọc theo:&nbsp;
						{result}
						<span className="label label-danger over btn_clear_filter" onClick={ this.onClearFilter }>Xóa tất cả lọc <i className="fa fa-times-circle" aria-hidden="true"></i></span>
					</div>
				</div>
      )
    }

  }

  onFilterRating = (filterRating) => {
		this.props.onFilterRating(filterRating);
	}

  onClearFilter = () => {
      this.props.onClearFilter();
      this.onUnCheckFilter();
  }

  onUnCheckFilter = () => {
    var cbk = document.getElementsByClassName('cbk');
		for (let i = 0; i < cbk.length; i++) {
			cbk[i].checked = false;
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
      var { products,
            keyword,
            sort,
            filterTrademark,
            filterPrice,
            filterRating } = this.props;
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

    // Sắp xếp
    if (sort.by == 'name') {
      products.sort((a,b) => {
          if (a.name > b.name) {
            return sort.value;
          } else if (a.name < b.name) {
            return -sort.value;
          } else {
            return 0;
          }
      })
    } else if (sort.by == 'price_sale') {
        let price_sale_a = 0;
        let price_sale_b = 0;
        products.sort((a,b) => {
          price_sale_a = parseInt(a.price_original*(100-a.discount)/100);
          price_sale_b = parseInt(b.price_original*(100-b.discount)/100);
          if (price_sale_a > price_sale_b) {
            return sort.value;
          } else if (price_sale_a < price_sale_b) {
            return -sort.value;
          } else {
            return 0;
          }
        });
    } else if (sort.by === 'count_view') {
			products.sort((a, b) => {
				if(a.count_view > b.count_view) return sort.value;
				else if(a.count_view < b.count_view) return -sort.value;
				else return 0;
			});
		}

    // LỌC THEO THƯƠNG HIỆU.
    if (filterTrademark.length > 0) {
      products = products.filter((product) => {
          for (let i = 0; i < filterTrademark.length; i++) {
            if (product.trademark.indexOf(filterTrademark[i]) !== -1) {
                return true;
            }
          }
          return false;
      });
    }

    // LỌC THEO GIÁ
    if (filterPrice.length > 0) {
        let price_sale = 0;
        products = products.filter((product) => {
          price_sale = parseInt(product.price_original*(100-product.discount)/100);
          for (let i = 0; i < filterPrice.length; i++) {
              if (filterPrice[i].max === 'infinity') {
                if (price_sale >= parseInt(filterPrice[i].min)) {
                    return true;
                }
              } else{
                if (price_sale >= parseInt(filterPrice[i].min) && price_sale <= parseInt(filterPrice[i].max)) {
    							return true;
    						}
              }
          }
          return null;
        });
    }

    // LỌC THEO rating
    if(filterRating != null) {
      products = products.filter((product) => {
          return product.rating >= filterRating;
      });
    }

    rowsPerPage = products.slice(startIndex, endIndex + 1);

      return (
        <div className="section product_list">
          <div className="container">
            <h1 className="text-center" style={{ marginBottom : "30px" }}>DANH SÁCH SẢN PHẨM </h1>
            <div className="row">
              <div className="col-sm-2">
                <div className="widget widget_title_search_filter">
                  <p><i className="fa fa-filter" /> BỘ LỌC TÌM KIẾM</p>
                </div>
                <WidgetFilterTrademark
                  onFilterTrademark = { this.onFilterTrademark }
                  filterTrademark = { filterTrademark }
                  products = {products}
                  onUnCheckFilter = { this.onUnCheckFilter }
                />
                <WidgetFilterPrice
                  onFilterPrice = { this.onFilterPrice }
                  filterPrice = { filterPrice }
                  products={ products }
                  onUnCheckFilter = { this.onUnCheckFilter }
                />
                <WidgetFilterRating
                    onFilterRating={ this.onFilterRating }
        						onUnCheckFilter={ this.onUnCheckFilter }
                    filterRating = { filterRating }
                    products={ products }
                />
              </div>
              <div className="col-sm-10">
                <div className="box_product_control mb-15">
                  <div className="row">
                    <ProductSearchControl
                      onSearch={this.onSearch}
                      keyword={ this.props.keyword }
                    />
                    <ProductSortControl
                      onSort = { this.onSort }
                      sort = {this.props.sort}
                    />
                    <div className="col-xs-3 box_pagination_info">{ products.length } Sản phẩm | Trang {currentPage}/{totalPages}</div>
                  </div>
                </div>
                { this.onShowfilterInfo() }
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
    keyword : state.search,
    sort : state.sort,
    filterTrademark : state.filterTrademark,
    filterPrice : state.filterPrice,
    filterRating: state.filterRating
  }
}

const mapDispatchToProps = (dispatch,props) => {
  return {
    fetchAllProducts : () => {
      dispatch(actFetchProductsRequest());
    },
    onAddToCart : (product,quantity) => {
        dispatch(actAddToCart(product,quantity));
    },
    onSearchProduct: (keyword) => {
  			dispatch(actSearchProduct(keyword));
  	},
    onSortProduct : (sort) => {
      dispatch(actSortProduct(sort));
    },
    onFilterTrademark : (filterTrademark) => {
      dispatch(actFilterTrademark(filterTrademark));
    },
    onClearFilter: () => {
			dispatch(actClearFilter());
		},
    onFilterPrice : (filterPrice) => {
      dispatch(actFilterPrice(filterPrice));
    },
    onFilterRating: (filterRating) => {
			dispatch(actFilterRating(filterRating));
		},
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductListPage);
