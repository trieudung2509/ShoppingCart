import React, { Component } from 'react';
import ProductItemMng from '../components/ProductItemMng';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actAddProductRequest,actGetProductRequest,actUpdateProductRequest } from '../actions/index';
class ProductActionMngPage extends Component {
    constructor(props) {
      super(props);
        this.state = {
          id : '',
          name : '',
          photo: 'https://via.placeholder.com/680x460',
          price_original : 0,
          discount : 0,
          rating : 3,
          description : '',
          inventory : 0,
          trademark : 'Không xác định'
        }
    }

    // static getDerivedStateFromProps(nextProps) {
    //   if (nextProps && nextProps.products) {
    //       let { products } = nextProps;
    //       console.log(products);
    //        return {
    //           id : products.id,
    //           name : products.name,
    //           photo:  products.photo,
    //           price_original : products.price_original,
    //           discount : products.discount,
    //           rating : products.rating,
    //           description : products.description,
    //           inventory : products.inventory,
    //           trademark: products.trademark,
    //       }
    //   }
    // }

    componentWillReceiveProps(nextProps) {
  		 console.log(nextProps);
  		if(nextProps && nextProps.itemEditing) {
  			var { itemEditing } = nextProps;
  			this.setState({
  				id: itemEditing.id,
  				name: itemEditing.name,
  				photo: itemEditing.photo,
  				price_original: itemEditing.price_original,
  				discount: itemEditing.discount,
  				rating: itemEditing.rating,
  				description: itemEditing.description,
  				trademark: itemEditing.trademark,
  				inventory: itemEditing.inventory
  			});
  		}
  	}

    componentDidMount() {
        let { match } = this.props;
        if (match) {
            let id = parseInt(match.params.Id);
            this.props.onEditProduct(id);
        }
    }

    onHandleChange = (event) => {
        let  target = event.target;
        let  name = target.name;
        let  value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
          [name] : value
        })
    }

    onSave = (event) => {
        event.preventDefault();
        let { history } = this.props;
        let product = {
          id : this.state.id,
          name: this.state.name,
    			photo: this.state.photo,
    			price_original: parseInt(this.state.price_original) || 0,
    			discount: parseInt(this.state.discount) || 0,
    			rating: parseInt(this.state.rating) || 0,
    			description: this.state.description,
    			trademark: this.state.trademark,
    			inventory: parseInt(this.state.inventory) || 0
        };
        if (this.state.id) {
            this.props.onUpdateProduct(product);
        } else {
            product.count_view = 0;
            this.props.onAddProduct(product);
        }
         history.goBack();
    }
    render() {
      return (
        <div className="section">
        				<div className="container">
        					<div className="row">
        						<div className="col-xs-8 col-xs-push-2">
        							<div className="panel panel-primary">
        								<div className="panel-heading">
        									<h3 className="panel-title text-center">
        										{/*nếu form được gọi đến, sẽ kiểm tra id đã tồn tại hay rỗng*/}
        										{this.state.id ? "Cập Nhật Sản Phẩm" : "Thêm sản phẩm"}
        									</h3>
        								</div>
        								<div className="panel-body">
        									<form onSubmit={this.onSave}>
        										<div className="form-group">
        											<label>Tên sản phẩm <span className="text-danger">*</span>:</label>
        											<input
        												type="text"
        												required="required"
        												className="form-control"
        												name="name"
                                value = {this.state.name}
                                onChange = {this.onHandleChange}
        											/>
        										</div>
        										<div className="form-group">
        											<label>Đường dẫn ảnh:</label>
        											<input
        												type="text"
        												className="form-control"
        												name="photo"
                                value={this.state.photo}
                                onChange={this.onHandleChange}
        											/>
        										</div>
        										<div className="row">
        											<div className="col-sm-5">
        												<div className="form-group">
        													<label>Giá gốc:</label>
        													<div className="input-group">
        														<span className="input-group-addon">VND</span>
        														<input
        															type="number"
        															className="form-control"
        															name="price_original"
                                      value={this.state.price_original}
                                      onChange={this.onHandleChange}
        														/>
        														<span className="input-group-addon">đ</span>
        													</div>
        												</div>
        											</div>
        											<div className="col-sm-3">
        												<div className="form-group">
        													<label>Giảm giá:</label>
        													<div className="input-group">
        														<span className="input-group-addon">-</span>
        														<input
        															type="number"
        															className="form-control"
        															name="discount"
                                      value={this.state.discount}
                                      onChange={this.onHandleChange}
        														/>
        														<span className="input-group-addon">%</span>
        													</div>
        												</div>
        											</div>
        											<div className="col-sm-4">
        												<div className="form-group">
        													<label>Giá bán:</label>
        													<p className="pt-6">{ parseInt(this.state.price_original * (100 - this.state.discount)/100) } đ</p>
        												</div>
        											</div>
        										</div>
        										<div className="form-group">
        											<label>Xếp hạng:</label>
        											<select
        												className="form-control"
        												name="rating"
                                value={this.state.rating}
                                onChange={this.onHandleChange}
        											>
        												<option value={0}>0</option>
        												<option value={1}>1</option>
        												<option value={2}>2</option>
        												<option value={3}>3</option>
        												<option value={4}>4</option>
        												<option value={5}>5</option>
        											</select>
        										</div>
        										<div className="form-group">
        											<label>Miêu tả:</label>
        											<textarea
        												rows="5"
        												type="number"
        												className="form-control"
        												name="description"
                                value={this.state.description}
                                onChange={this.onHandleChange}
        											>
        											</textarea>
        										</div>
        										<div className="form-group">
        											<label>Thương hiệu:</label>
        											<select
        												className="form-control"
        												name="trademark"
                                value={this.state.trademark}
                                onChange={this.onHandleChange}
        											>
        												<option value="Không xác định" disabled="disabled">Vui lòng chọn</option>
                                {this.props.trademarkList.map((item,index) =>
                                    <option key={index} value={item} >{item}</option>
                                )}
        											</select>
        										</div>
        										<div className="form-group">
        											<label>Số lượng trong kho:</label>
        											<input
        												type="number"
        												className="form-control"
        												name="inventory"
                                value={this.state.inventory}
                                onChange={this.onHandleChange}
        											/>
        										</div>
        										<div className="form-group text-center">
        											<button type="submit" className="btn btn-primary">
        												<i className="fa fa-save mr-5"></i>Lưu Lại
        											</button>
        										</div>
        									</form>
        								</div>
        							</div>
        							<hr/>
        							<p className="text-center">
        								<Link to='/product-list-mng' className="btn btn-default">Quay lại quản lý sản phẩm</Link>
        							</p>
        						</div>
        					</div>
        				</div>
        			</div>
      )
    }
}

ProductActionMngPage.defaultProps = {
  trademarkList : ['Apple', 'Samsung', 'Nokia', 'Sony', 'Xiaomi', 'Philips', 'Vsmart', 'OPPO']
}

const mapStateToProps = (state) => {
  return {
    itemEditing : state.itemEditing
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
      onAddProduct : (product) => {
        dispatch(actAddProductRequest(product));
      },
      onEditProduct : (id) => {
        dispatch(actGetProductRequest(id));
      },
      onUpdateProduct : (product) => {
        dispatch(actUpdateProductRequest(product));
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductActionMngPage);
