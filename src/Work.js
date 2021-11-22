const Work = () => {
    return ( 
        <div className="work section scrollTopBuffer" id="projects">
            <div className=''>
                <h1><span>My work</span></h1>
            </div>
            <div className="flex-container">
                <div className="container">
                <h4><b>Performance management system App</b></h4> 
                <p>worked on the backend,
                    creating several Rest APIs for Authentication, Goals Management, and
                    Employee Tracking using Django Rest Framework.</p> 
                </div>
                <div className="container">
                <h4><b>Online Blogging App</b></h4> 
                <p>Created numerous REST APIs that enable users to
                    create and modify blogs with various tags, as well as read, like, and
                    comment on other people's blogs and subscribe to their favorite
                    bloggers.</p> 
                </div>
                <div className="container">
                <h4><b>Movie Recommendation System</b></h4> 
                <p>worked on web
                    Implementations of Recommendation System using Python Flask and
                    MySQL Database.</p> 
                </div> 
                <div className="container">
                <h4><b>Budget Management Application:</b></h4> 
                <p>Calculating a budget based on CRUD actions. The user can provide
                    the income details, expenses details and can see the budget at
                    the top with details stored.</p> 
                </div>
            </div> 
        </div>
     );
}
 
export default Work;