import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import './FollowUs.css'


export function FollowUs() {
    return(
        <div className="follow-container">
            <p>Seguir Microsoft</p>
            <div>
                <a href="" className="iconos"><FaFacebookF /></a>
                <a href="" className="iconos"><FaXTwitter /></a>
                <a href="" className="iconos"><FaLinkedin /></a>
            </div>
            

        </div>
    )
}