const Work = ({data}) => {
    return ( 
        <div className="work section scrollTopBuffer" id="projects">
            <div className=''>
                <h1><span>My work</span></h1>
            </div>
            <div className="flex-container">
            {
                data.map((work, index) => (
                    <div className="container" key={index}>
                        <h4><b>{work.title}</b></h4>
                        <p>{work.details}</p>
                    </div>
                ))
            }
           </div>
        </div>
     );
}
 
export default Work;