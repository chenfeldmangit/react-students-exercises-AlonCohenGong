import React from 'react';

function NavItem (props) {
    return (
    <div>
        <div className="nav-item" onClick={(id)=>props.onNavClick(id)}>
            <div className="nav-icon"><img src={'../assets/'+props.imgName} alt={props.caption}/></div>
            <div className="nav-text">{props.caption}</div>
        </div>

    </div>
    );
}

export default NavItem;