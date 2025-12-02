import React, { useState } from 'react';

function Projects() {
  const [showAll, setShowAll] = useState(false);
  
  const allProjects = [
    { id: 1, title: "Quantum Nexus", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore." },
    { id: 2, title: "Stellar Framework", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo." },
    { id: 3, title: "Cipher Protocol", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla." },
    { id: 4, title: "Neural Mesh", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim." },
    { id: 5, title: "Apex Engine", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." },
    { id: 6, title: "Flux Compiler", description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur." },
    { id: 7, title: "Prism Analytics", description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit." },
    { id: 8, title: "Vortex Platform", description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae." },
    { id: 9, title: "Zenith Core", description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum." },
    { id: 10, title: "Echo System", description: "Et harum quidem rerum facilis est et expedita distinctio nam libero tempore cum soluta nobis." }
  ];

  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 5);

  return (
    <section className="section">
      <h2 className="section-title">Projects</h2>
      <div className="items-list">
        {displayedProjects.map(project => (
          <div key={project.id} className="item-card">
            <h3 className="item-title">{project.title}</h3>
            <p className="item-description">{project.description}</p>
          </div>
        ))}
      </div>
      {allProjects.length > 5 && (
        <div className="show-more-container">
          <button 
            className="show-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </section>
  );
}

export default Projects;
