import RightArrow from '../../assets/lucide/arrow';
import Website from "@/assets/lucide/website";
import Gith from '@/assets/lucide/github';

const Project = () => {
    return (        
        <div className="project-container">
            <div className="project-titlebar">
                <span className="intro-text"><b>My Projects</b></span>
                <a href="/path-to-others.pdf" target="_blank" className="rect-btn">
                    <span className='button-text'>others</span>
                    <RightArrow />
                </a>              
            </div>       

            <div className="project-wrapper">
                <div className="project-display">
                    <div className="project-display-url">
                        content
                    </div>
                    <div className="project-display-content">
                        <h1><b><i>Projects</i></b></h1>  
                        <p>lorem ipsum</p>
                        <div className="src-wrapper">                        
                            <a href="/path-to-others.pdf" target="_blank" className="src-btn">
                                <Website />website
                            </a>   
                            <a href="/path-to-others.pdf" target="_blank" className="src-btn">
                                <Gith />source
                            </a>    
                        </div>                     
                    </div>
                </div>

                <div className="project-display">
                    <div className="project-display-url">
                        content
                    </div>
                    <div className="project-display-content">
                        <h1><b><i>Projects</i></b></h1>  
                        <p>lorem ipsum</p>
                        <div className="src-wrapper">
                            <a href="/path-to-others.pdf" target="_blank" className="src-btn">
                                <Website />website
                            </a>   
                            <a href="/path-to-others.pdf" target="_blank" className="src-btn">
                                <Gith />source
                            </a>
                        </div>
                    </div>
                </div>
            </div>              
        </div>
    );
};

export default Project;