import React from 'react';

import Card from './Card';


const Cardlist = ({robots}) =>{
    const Cardcomp = robots.map((user,i) => {
        return (<Card key={user.id} id = {user.id} name={user.name} email={user.email} />)
    })
    return(
        <div>
        {Cardcomp};
        </div>
    )
}

export default Cardlist;
