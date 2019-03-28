import React from 'react';
import {Link} from 'react-router-dom'

const Bookshelf = ({ bookshelves })=>{

    return (
            <section>
                <h1>EGGS!</h1>
                <h2>
                    {bookshelves.title}
                </h2>
            </section>
        )}

export default Bookshelf