import { useState } from "react";
import ConfCard from "./ConfCard";

const MyConferences = () => {

    const [myConf, setMyConf] = useState(
        [
            {title: "Vuecon",
             desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed     non, in imperdiet enim gravida sit, Lorem ipsum dolor sit amet. ",
              date: "Nov 2021"
            },
            {title: "Google I/O",
             desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed     non, in imperdiet enim gravida sit, Lorem ipsum dolor sit amet. ",
              date: "Nov 2021"
            }
        ]
    )

    return ( 
        <div className="myconf">
            <div className="myconf--title">
                My Conferences
            </div>
            <div className="shared--toggle">
                <div className="shared--text active" id="shared--with--you">
                    Ongoing
                </div>
                <div className="shared--text" id="shared--with--you">
                    Completed   
                </div>
                <div className="shared--text" id="shared--by--you">
                    Upcoming
                </div>
                </div>
            {myConf.map((obj)=>{
                return <ConfCard title={obj.title} desc={obj.desc} date={obj.date} />
            })}
        </div>
     );
}
 
export default MyConferences;