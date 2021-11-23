const Skills = () => {
    return ( 
        <div className="skills scrollTopBuffer" id="skills">
            <div className="section">
                <h1><span>My Skills</span></h1>
                <ul>
                    <li>HTML, CSS, JQuery, Bootstrap <br />
                        <progress min="0" max="100" value="95"></progress>
                    </li>
                    <li>Angular and React JS <br />
                        <progress min="0" max="100" value="78"></progress>
                    </li>
                    <li>Javscript, Node.js <br />
                        <progress min="0" max="100" value="85"></progress>
                    </li>
                    <li>MySQL, MongoDB, Firebase, PostgreSQL  <br />
                        <progress min="0" max="100" value="85"></progress>
                    </li>
                    <li>Linux, Shell Script  <br />
                        <progress min="0" max="100" value="70"></progress>
                    </li>
                    <li>GCP, AWS  <br />
                        <progress min="0" max="100" value="70"></progress>
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default Skills;