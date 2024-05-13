//PascalCasing for components 
function Projects(){
    const projects = [
        {name: 'Covid Project', discription: 'Developed an online system to help a hypothetical local hospital for its COVID vaccination effort. The system will keep track of both patient and vaccine information for the hospital', link: ''},
        {name: 'PC Part Picker', discription: 'Developed an interface where users can select different PC parts from a given list. The price for the selected PC components are then displayed at checkout.', link: ''},
        {name: 'Tesla Stocks Project', discription: 'Developed a program that reads and processes historic stock data for the Tesla Company. The data is extracted from a .csv file and then processed to display the information.', link: ''},
        {name: '2D Liked List Project', discription: 'Developed a generic program that accepts an array list of information and turns it into 2D Linked List data structure.', link: ''},
        {name: 'DijiKey API', discription: 'Developed an Express.js Server Application to demonstrate understanding of Node.js Servers, Express Router, and Database Integration. The Server Application interacts with DijiKey API and stores data on a Mongo Atlas Cloud Database.', link: ''}
    ]

    return(
        <div className="projectHolder">
            <h3>Projects</h3>
            <div className="projects">
                {projects.map((project, index) => (
                    <div key={index} className="card project" style={{width: '18rem'}}>
                        <div className="card-body">
                            <h5 className="card-title">{project.name}</h5>
                            <p className="card-text">{project.discription}</p>
                            <a className="btn btn-primary rounded" href={project.link}>Try It</a>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Projects;