import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function CursorController() {
  const location = useLocation();

  useEffect(() => {
    document.body.className = document.body.className.replace(/\bcursor-\S+/g, '');

    switch (location.pathname) {
      case '/CV':
        document.body.classList.add('cursor-read');
        break;
      case '/qualifications':
        document.body.classList.add('cursor-invention');
        break;
      case '/projects':
        document.body.classList.add('cursor-smithing');
        break;
      case '/games':
        document.body.classList.add('cursor-agility');
        break;
      case '/contact-me':
        document.body.classList.add('cursor-speech');
        break;
      default:
        document.body.classList.add('cursor-default');
    }
  }, [location]);

  return null;
}