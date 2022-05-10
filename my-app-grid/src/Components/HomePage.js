import React from 'react';
import GridLayout from "react-grid-layout";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

import './Styles/HomePage.css';
import { fetchProducts } from "../Redux-data/action";

//Grid styling:
const GridItemWrapper = styled.div`background: Whitesmoke; display: flex; `;
const GridItemContent = styled.div`padding: 8px;`;

export default function Home() {
    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
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

    //Creating layout fot the number of items available in JSON
    let index = 0

    const onCLickPageNumber = ({ selected }) => {
        setPage(selected); //setting page to state
    };

    return (
        <div className='productsStyling'>
            <GridLayout cols={4} rowHeight={300} width={1000}>
                {
                    finalProducts
                        .slice(
                            numberOfRecordsVistited,
                            numberOfRecordsVistited + productPerPage //If user clicks on page number 3, then product 15 has to be displayed
                        )
                        .map((product) => {
                            index += 1
                            return (
                                <GridItemWrapper key={index} className="productGrid">
                                    <GridItemContent>
                                        {product.title} <br></br><br></br>
                                        <img
                                            width="200" height="200"
                                            src={product.imagePath}
                                            alt={`Product Name: ${product.title}`} />
                                        <br></br>{`Description: ${product.description}`} <br></br>
                                    </GridItemContent>
                                </GridItemWrapper>
                            )
                        })
                }
            </GridLayout>
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