import { Link } from "react-router-dom";
import {
    Menu,
} from "../../shared/index";
import { useState } from "react";
export const AppAdminSideBar = ()=>{

    const [model] = useState([
        {
            label:"Home",
            items:[
                {
                    label:"dashboard",
                    icon:"pi pi-chart-bar",
                    path:"/admin"
                }
            ]
        },
        {
            label:"UI Components",
            items:[
                {
                    label:"Table",
                    path:"/admin/ui-kits/table",
                    icon:"pi pi-table"
                },
                {
                    label:"Input",
                    path:"/admin/ui-kits/input",
                    icon:"pi pi-check-square"
                },
            ]

        },
        {
            label: 'Hierarchy',
            items: [
                {
                    label: 'Submenu 1',
                    icon: 'pi pi-fw pi-bookmark',
                    items: [
                        {
                            label: 'Submenu 1.1',
                            icon: 'pi pi-fw pi-bookmark',
                            items: [
                                { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                                { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
                            ]
                        },
                        {
                            label: 'Submenu 1.2',
                            icon: 'pi pi-fw pi-bookmark',
                            items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }]
                        }
                    ]
                },
                {
                    label: 'Submenu 2',
                    icon: 'pi pi-fw pi-bookmark',
                    items: [
                        {
                            label: 'Submenu 2.1',
                            icon: 'pi pi-fw pi-bookmark',
                            items: [
                                { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                                { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' }
                            ]
                        },
                        {
                            label: 'Submenu 2.2',
                            icon: 'pi pi-fw pi-bookmark',
                            items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }]
                        }
                    ]
                }
            ]
        },
    ]);

    return (
    <>
            <div className="sidebar-wrapper">
                <div className="sidebar-content">
                <Menu model={model}/>
                </div>
            </div>
        </>
    );
}
