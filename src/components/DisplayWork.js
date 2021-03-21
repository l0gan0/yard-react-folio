import React, { useState } from 'react';
import '../App.scss';

import Folio from './Folio';
import Categories from './Categories';
import items from '../data';

const allCategories = ['All',...new Set(items.map((item) => item.category)) ] ;

console.log(allCategories);


function DisplayWork() {

    const [folioItems, setFolioItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        
        if(category === "All") {
            setFolioItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setFolioItems(newItems);
        // add this to fix error
        setCategories(allCategories);
    }

    return (
        
        <>
            <section className="folio section">
                <Categories categories={categories} filterItems={filterItems} />
                <Folio items={folioItems} />
                
            </section>
        </>
    );
}

export default DisplayWork;
