const Work = ({workArr}) => {
    return ( 
        <div className="work section scrollTopBuffer" id="projects">
            <div className=''>
                <h1><span>My work</span></h1>
            </div>
            {
                workArr.map((work, index) => (
                    <div className="container">
                        <h4><b>{work.title}</b></h4>
                        <p>{work.details}</p>
                    </div>
                ))
            }
                
        </div>
     );
}
 
export default Work;