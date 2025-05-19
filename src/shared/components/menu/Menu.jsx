import {MenuItem} from "../../index";

export const Menu = ({model=[]})=>{

    return (
        <>
            <ul className="layout-menu">
                {
                    model.map((item,index) => (
                        <MenuItem 
                            item={item} 
                            key={index} 
                            root={true}/>
                    ))
                }
            </ul>
        </>
    );
}