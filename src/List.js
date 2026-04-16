import React from 'react';

function List({ items }) {

    if (!items) {
        return <p>No items to display</p>;
    }

    return (
        <ul>
            {items.map(item => (
               <li
                key={item.id}
                onClick={() => setSelectedItem(item)}>
                   {item.name}
               </li>
            ))}
        </ul>
    )
}

export default List;