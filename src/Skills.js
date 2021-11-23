const Skills = ({data}) => {
    return ( 
        <div className="skills scrollTopBuffer" id="skills">
            <div className="section">
                <h1><span>My Skills</span></h1>
                <ul>
                    {
                        data.map((skill, index) => (
                            <li key={index}>{skill.title} <br />
                                <progress min="0" max="100" value={skill.level}></progress>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
     );
}
 
export default Skills;