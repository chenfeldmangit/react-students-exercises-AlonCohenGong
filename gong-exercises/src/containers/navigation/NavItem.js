import React from 'react';

function NavItem (props) {
    return (
    <div>
        <a  href="javascript:;" onClick={props.click}>
                                <div className="nav-item">
                                    <div className="nav-icon"><img src={'../assets/'+props.imgName} alt={props.caption}/></div>
                                    <div className="nav-text">{props.caption}</div>
                                </div>
        </a>
    </div>
    );
}

export default NavItem;