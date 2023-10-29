
import abc from "../assets/login_page.png";

export default function Logo({className}){

    return(
        <div className={className}>
        <img src={abc} alt="login-page" />
        </div>
    )
}