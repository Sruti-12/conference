import{AiOutlineHome} from "react-icons/ai";
import{ BsGrid1X2} from "react-icons/bs";
import {MdPeopleOutline} from "react-icons/md"
import { VscBellDot } from "react-icons/vsc"
import { AiOutlineQuestionCircle } from "react-icons/ai"
const Sidebar = () => {
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> </link>

    return ( 
        
        
        <div className="iconBar">
        <a className="active" href="#home"><AiOutlineHome className="active" /></a> 
        <a href="#search"><BsGrid1X2 /></a> 
        <a href="#forum"><MdPeopleOutline /></a> 
        <a href="#notification"><VscBellDot/></a>
        <a href="#help"><AiOutlineQuestionCircle/></a> 
        </div>


     );
}

export default Sidebar;
