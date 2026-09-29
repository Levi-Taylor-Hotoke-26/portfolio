import React from 'react';
import { interestsData, InterestItem } from '../data/interestsData.ts';

export default function Interests() {
  const renderGalleryRow = (title: string, items: InterestItem[]) => (
    <div className="gallery-section">
      <h4 className="gallery-title">{title}</h4>
      <div className="horizontal-scroll-container">
        {items.map((item) => (
          <div key={item.id} className="gallery-card">
            <img src={item.imageUrl} alt={item.title} className="gallery-img" />
            <p className="gallery-item-title">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="interests">
      <h3 className="interests-main-title">Interests</h3>
      {renderGalleryRow('Games', interestsData.games)}
      {renderGalleryRow('Movies', interestsData.movies)}
      {renderGalleryRow('TV Shows', interestsData.tvShows)}
      {renderGalleryRow('Anime', interestsData.anime)}
    </section>
  );
}