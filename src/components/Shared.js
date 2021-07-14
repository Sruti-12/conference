
const Shared = () => {
    return ( 
        <div className="shared">
            <div className="shared--title">
                Shared Documents
            </div>
            <div className="shared--toggle">
                <div className="shared--text active" id="shared--with--you">
                    With you
                </div>
                <div className="shared--text" id="shared--by--you">
                    By you
                </div>
                </div>
                {/* <div className="shared--docs">
                    <div className="shared--no--docs">
                        No documents shared at the moment
                    </div>
                </div> */}
            
        </div>
     );
}
 
export default Shared;