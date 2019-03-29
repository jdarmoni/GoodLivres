import React from 'react';
import {Link} from 'react-router-dom'

const Bookshelf =({bookshelves, currentUser})=>{
    debugger
    return (
        <section>
            <h1 className="Eggs">EGGS!</h1>
                <h2 className ="bookShelves">
                    {bookshelves}
                </h2>
            </section>
        )}

export default Bookshelf