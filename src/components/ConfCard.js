import{AiOutlineDownload} from "react-icons/ai";

const ConfCard = ({title, desc, date}) => {

    return ( 
        <div className="confcard">
            <img src="https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" className="confcard--image" />
            <div className="confcard--details">
            <div className="confcard--title">
                {title}
            </div>
            <div className="confcard--desc">
                {desc}
            </div>
            <div className="confcard--end">
            <div className="confcard--date">
                Ends {date}
            </div>
            <div className="confcard--download">
            <AiOutlineDownload color="#1F6CD3"/>
            </div>
            </div>
        </div></div>
     );
}
 
export default ConfCard;