const About = () => {
    return ( 
        <div className="about">
            <div id="header" className="section">
                <img alt="" className="img-circle" src="https://image.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg"/>
                <p>Siddhesh Kubal</p>
            </div>
            <div className="section scrollTopBuffer" id="about">
                <h1><span>About Me</span></h1>
                <p>
                    Hey! I'm <strong>Siddhesh</strong>.I’ve always been a great problem solver, an independent extrovert, and a technophile obsessed with the latest devices. Today, I’m working from home as a software engineer for Quantiphi, Inc., and I get to show off all these elements of who I am.

                    I started learning to code when I was a teenager, though it was always more of a hobby than a career focus. After a college education, and continuing to pursue that hobby, I realized software engineering was the right field for me.
                </p>
                <p className="quote">"Declare variables, not war"</p>
            </div>
        </div>
     );
}
 
export default About;