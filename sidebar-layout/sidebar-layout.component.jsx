import React from 'react';
import SidebarMenuComponent from "../sidebar-menu/sidebar-menu.component";
import SidebarNavComponent from "../sidebar-nav/sidebar-nav.component";

function SidebarLayoutComponent(props) {
    return (
        <div>
            <div style={{display: "flex"}}>
                <SidebarMenuComponent history={props.history}/>
                <div style={{maxWidth: '800px'}}>
                    <SidebarNavComponent />
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default SidebarLayoutComponent;