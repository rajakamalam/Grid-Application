import products from '../data.json'

export function getProducts(products) {
    return {
        type: "GET_PRODUCTS",
        payload: products,
    };
}

export function searchKeyword(keyword) {
    //console.log("Search - action");
    return {
        type: "SEARCH_KEYWORD",
        payload: keyword,
    };
}

export function fetchProducts() {
    return (dispatch) => {
        dispatch(getProducts(products));
    };
}