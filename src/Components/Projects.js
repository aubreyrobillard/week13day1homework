import img1 from './Project1img.png'
import img2 from './Project2img.png'

function Projects(){
    return <div className="Projects">
        
        <div className="project1card">
            <h2>Animal Crossing New Horizons</h2>
            <a href="https://github.com/aubreyrobillard/Unit1_Project"><h3>GitHub Link</h3></a>
            <a href="https://acnh-insect-finder.onrender.com"><h3>Deployed Site</h3></a>
            <img src={img1} alt="img1"></img>
        </div>
        
        <div className="project2card">
        <h2>TASTIES App</h2>
            <a href="https://github.com/aubreyrobillard/unit2project"><h3>GitHub Link</h3></a>
            <a href="https://aubreyunit2project.onrender.com"><h3>Deployed Site</h3></a>
            <img src={img2} alt="img2"></img>
        </div>
    
    </div>
}

export default Projects;