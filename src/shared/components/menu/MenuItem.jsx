import { Link } from "react-router-dom";
export const MenuItem = ({item=[],root}) =>{

    return (
        <>
            <li className="menuItem">
                    {
                        (!item.path && item.items) && 
                        (
                            <a>
                                 <i className={['menuitem-icon',item.icon].join(' ')}></i>
                                 <span class="menuitem-text">{ item.label }</span>
                                 {
                                    item.items &&
                                    <i class="pi pi-fw pi-angle-down submenu-toggler" ></i>
                                 }
                            </a>
                        )
                    }       
                    {
                        (item.path && !item.items) && 
                        <Link to={item.path}>
                            <i className={['menuitem-icon',item.icon].join(' ')}></i>
                            <span className="menuitem-text">{ item.label }</span>
                            {
                                item.items &&
                                <i className="pi pi-fw pi-angle-down submenu-toggler"></i>
                            }
                        </Link>
                    }       
                    { 
                        item.items &&
                        <ul className="sub-menu">
                            {
                                item.items.map((item,index) =>(
                                    <MenuItem item={item} key={index} root={false}/>
                                ))
                            }
                        </ul>
                    } 
            </li>
        </>
    );
}