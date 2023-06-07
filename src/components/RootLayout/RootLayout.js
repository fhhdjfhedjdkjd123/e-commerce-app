import { Fragment } from "react";
import NavBar from "../Header/NavBar";
import Logo from "../Items/Logo";

const RootLayout=(props)=>{
    return(
        <Fragment>
            <NavBar/>
            <Logo/>
            <main>{props.children}</main>
        </Fragment>
    );


};
export default RootLayout;