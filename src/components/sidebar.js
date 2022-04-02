import React, { useEffect, useState } from "react";

const Sidebar = () => {
    const[categories, setCategories] = useState([]);

    useEffect(() => {

                fetch("https://api.thecatapi.com/v1/categories")
                .then(res => res.json())
                .then(data => setCategories(data))
                console.log(categories)
            }, []);   

    return (
        <ul>
            {categories.map((category) => <li><a href={category.id} key={category.id}>{category.name}</a></li> )}
        </ul>
    )
}

export default Sidebar;