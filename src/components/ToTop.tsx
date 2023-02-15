import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

import { scrollToTop } from 'shared/utils/scrollToTop';

export function ToTop() {
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 400 && !showToTop) {
        setShowToTop(true);
      }

      if (window.scrollY <= 400 && showToTop) {
        setShowToTop(false);
      }
    });
  }, [showToTop]);

  return showToTop ? (
    <div
      className="
        fixed bottom-6 right-6 w-12 h-12 bg-blue-500 text-slate-50 shadow-md
        rounded-full flex justify-center items-center text-2xl cursor-pointer
        dark:bg-gray-900"
      onClick={scrollToTop}
      aria-hidden="true"
    >
      <FiArrowUp />
    </div>
  ) : null;
}
