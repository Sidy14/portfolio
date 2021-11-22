const Skills = () => {
    return ( 
        <div className="skills scrollTopBuffer" id="skills">
            <div className="section">
                <h1><span>My Skills</span></h1>
                <ul>
                    <li>C, C++, Python <br />
                        <progress min="0" max="100" value="90"></progress>
                    </li>
                    <li>Data Structures and Algo <br />
                        <progress min="0" max="100" value="90"></progress>
                    </li>
                    <li>Django and Flask <br />
                        <progress min="0" max="100" value="80"></progress>
                    </li>

                </ul>
            </div>
        </div>
     );
}
 
export default Skills;