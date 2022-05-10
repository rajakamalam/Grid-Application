
const initialState = {
    products: [],
    keyword: "",
    filteredProducts: []
};

export default function productDetails_reducer(state = initialState, action) {
    switch (action.type) {
        case "GET_PRODUCTS": {
            // console.log("Get Products - Reducer");
            // console.log(action.payload);
            return {
                ...state,
                products: action.payload,
            };
        }
        case "SEARCH_KEYWORD": {
            // console.log("Search - reducer");
            // console.log("Keyword:");
            const keyword = action.payload;
            // console.log(keyword);
            let products = state.products.filter((product) => product.title.toLowerCase().search(keyword.toLowerCase()) !== -1);
            // console.log(products);
            return {
                ...state,
                filteredProducts: products,
                keyword: keyword
            };
        }
        default:
            return state;
    }
}