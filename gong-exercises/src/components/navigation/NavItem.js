import React from 'react';
import {Link} from 'react-router-dom';
function NavItem (props) {
    return (
    <Link to={`/${props.link}`}>
        <div className="nav-item">
            <div className="nav-icon"><img src={'../assets/'+props.imgName} alt={props.caption}/></div>
            <div className="nav-text">{props.caption}</div>
        </div>

    </Link>
    /*onClick={(id)=>props.onNavClick(id)*/
    );
}

export default NavItem;