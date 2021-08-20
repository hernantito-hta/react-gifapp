import React, { Fragment, useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({defaultCategories = []}) => {
    const [categories, setCategories] = useState(defaultCategories);
    // const handleAddItem = (e) => {
    //     setCategories(categs => [...categs, `Item ${Math.random()}`]);
    // };

    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories} />
            <hr/>
            {/* <button onClick={handleAddItem}>Add item</button> */}
            <ol>
                {
                    categories.map((item, i) => {
                        return <GifGrid
                            key = {i} 
                            category = {item}
                            />;
                    })
                }
            </ol>

        </Fragment>
    );
};

export default GifExpertApp;