import { useEffect } from 'react';
import HomePage from './pages/homepage';
function App() {
  // Add smooth scroll behavior for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.target.closest('a')?.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
      {/* Background gradient effect */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="relative">
        <HomePage />
      </div>
    </div>
  );
}

export default App;