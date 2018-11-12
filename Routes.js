import React, { Component } from 'react';
import { NavLink, BrowserRouter, Route, Switch } from 'react-router-dom';
import cartDisplay from './src/components/CartDisplay';
import App from './App';
import './style.css';
import connect from "react-redux/es/connect/connect";
class Routes extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <div className='cartButton'>
                        <button>
                            <NavLink to="/cart">
                                <div className="cartQty">
                                    {this.props.cart.length} &nbsp;
                                    {
                                        ( this.props.cart.length == 0 ) ||
                                        ( this.props.cart.length == 1 ) ? "item" : "items"
                                    }
                                </div>
                                <img className="cartIcon" src="Cart-Icon.png" />
                            </NavLink>
                        </button>
                    </div>
                    <Switch>
                        <Route exact path="/" component={ App } />
                        <Route path="/cart" component={ cartDisplay }/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps=state=> {
    return {
        cart: state.cartReducer.cart
    }
};
export default connect(mapStateToProps) (Routes);
