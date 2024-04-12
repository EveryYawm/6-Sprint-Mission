import React from 'react';
import { getProducts } from './api.js';

function products() {

}

function productList( {products}) {
    return (
        <ul>
            {products.map((list))} => {
                return (
                    <li key={list.id}>
                        <ProductListItem />
                    </li>
                )
            }
        </ul>
}

export default productList;
