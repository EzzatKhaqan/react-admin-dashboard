import { Link } from "react-router-dom";
import "./styles/menu-item.css";

export const MenuItem = ({item=[],root=true}) =>{

    return (
        <>
            <li className={root?'root-menuitem':''}>
                    {
                        //the root menu item that has no path and has submenus
                        root && 
                            <div className="menuitem-root-text">{item.label}</div>
                        
                    }
                    {
                        // if the item is root, display is none
                        // if the submenu item has submenus (display block)
                        item.items && !item.to &&
                        <a>
                            <i className={[item.icon,'menuitem-icon'].join(' ')}></i>
                            <span className="menuitem-text">{item.label}</span>
                            {
                                item.items && item.items.length > 0 &&
                                <i className="pi pi-angle-down layout-submenu-toggler"></i>
                            }
                        </a>
                    }
                    {

                        (item.to && !item.items) &&
                        <Link to={item.to}>
                             <i className={[item.icon,'menuitem-icon'].join(' ')}></i>
                             <span className="menuitem-text">{item.label}</span>
                        </Link>
                    }
                    {
                        // recurisve call MenuItem,for submenu items
                        item.items &&
                        <ul className="submenu">
                            {
                                item.items.map((submenuItem,index)=>(
                                    <MenuItem item={submenuItem} key={index} root={false}/>
                                ))
                            }
                        </ul>
                    }
            </li>
        </>
    );
}

