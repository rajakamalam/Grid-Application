import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Table from 'react-bootstrap/Table';

import './Styles/ProductDetails.css';
import { fetchProducts } from "../Redux-data/action";

export default function ProductDetails() {
    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
    const [searchProducts, setSearchProducts] = useState('')
    const productPerPage = 5;

    //Fetching data:
    //final products have to be the refreshed with filtered products on search - onchange function written inside search box
    let finalProducts = useSelector((state) => (state.keyword) ? state.filteredProducts : state.products);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    //tracking the number of pages visited by the user
    const numberOfRecordsVistited = page * productPerPage;
    const totalPages = Math.ceil(finalProducts.length / productPerPage);

    const onCLickPageNumber = ({ selected }) => {
        setPage(selected); //setting page to state
    };

    return (
        <div className='productsStyling'>
            <Table>
                <thead>
                    <tr>
                        <th>Product Title</th>
                        <th>Image</th>
                        <th>Item Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        finalProducts
                            .slice(
                                numberOfRecordsVistited,
                                numberOfRecordsVistited + productPerPage //If user clicks on page number 3, then product 15 has to be displayed
                            )
                            .map((product) => (
                                <tr key={product.title}>

                                    <td>{product.title}</td>
                                    <td>
                                        <img
                                            width="200" height="200"
                                            src={product.imagePath}
                                            alt={`Product Name: ${product.title}`} />
                                    </td>
                                    <td>{`Description: ${product.description}`}</td>
                                </tr>
                            ))
                    }
                </tbody>
            </Table>
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={totalPages}
                onPageChange={onCLickPageNumber}
                containerClassName={"navigationButtons"}
                previousLinkClassName={"previousButton"}
                nextLinkClassName={"nextButton"}
                disabledClassName={"navigationDisabled"}
                activeClassName={"navigationActive"}
            />
        </div>
    )
}