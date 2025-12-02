import React, { useState } from 'react';

function Articles() {
  const [showAll, setShowAll] = useState(false);
  
  const allArticles = [
    { id: 1, title: "De Finibus Bonorum et Malorum", date: "II Dec MMXXV", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam." },
    { id: 2, title: "Cicero's Philosophical Works", date: "XXX Nov MMXXV", description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque." },
    { id: 3, title: "The Extremes of Good and Evil", date: "XXV Nov MMXXV", description: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates." },
    { id: 4, title: "On the Nature of Things", date: "XX Nov MMXXV", description: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat." },
    { id: 5, title: "Metaphysical Considerations", date: "XV Nov MMXXV", description: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur." },
    { id: 6, title: "Ethics and Morality", date: "X Nov MMXXV", description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur." },
    { id: 7, title: "The Pursuit of Wisdom", date: "V Nov MMXXV", description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit sed quia non numquam." },
    { id: 8, title: "Rational Discourse", date: "I Nov MMXXV", description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea." },
    { id: 9, title: "Ancient Philosophy", date: "XXV Oct MMXXV", description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores." },
    { id: 10, title: "Stoic Principles", date: "XX Oct MMXXV", description: "Et harum quidem rerum facilis est et expedita distinctio nam libero tempore cum soluta nobis est eligendi optio." }
  ];

  const displayedArticles = showAll ? allArticles : allArticles.slice(0, 5);

  return (
    <section className="section">
      <h2 className="section-title">Articles</h2>
      <div className="items-list">
        {displayedArticles.map(article => (
          <div key={article.id} className="item-card">
            <h3 className="item-title">{article.title}</h3>
            <p className="item-meta">{article.date}</p>
            <p className="item-description">{article.description}</p>
          </div>
        ))}
      </div>
      {allArticles.length > 5 && (
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

export default Articles;
