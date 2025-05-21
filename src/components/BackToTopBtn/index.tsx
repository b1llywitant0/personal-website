// backToTopBtn.tsx
import { ArrowUp } from 'lucide-react'

export function BackToTopButton() {
    console.log("BackToTopButton rendered");

  const scrollToTop = () => {
    const el = document.getElementById('scrollable-div');
    if (el) {
        el.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700"
    >
      <ArrowUp size={20} />
    </button>
  )
}
