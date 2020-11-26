import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  addAllTypes,
  sorteByType,
} from "../../redux/products-reducer/products-reducer.js";
import FilterButtonContainer from "./FiltersButton/FilterButtonContainer.js";
import ProductList from "./Products/ProductsList.js";

const ProductsContainer = ({ products,allTypes, sorteByType, addAllTypes }) => {
  useEffect(() => {
    addAllTypes();
  },[allTypes.length]);
  return (
    <section>
      <h2>Products</h2>
      <FilterButtonContainer allTypes={allTypes} sorteByType={sorteByType}/>
      <ProductList products={products} />
    </section>
  );
};

const mapStateToProps = (state) => ({
  products: state.productsData.products,
  allTypes: state.productsData.allTypes,

});

export default connect(mapStateToProps, { sorteByType, addAllTypes })(
  ProductsContainer
);
