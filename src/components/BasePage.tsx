import { PropsWithChildren, useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { scrollToTop } from 'shared/utils/scrollToTop';
import { Header } from './Header';

export function BasePage({ children }: PropsWithChildren) {
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

  return (
    <div className="base_page">
      <Header />

      <main className="w-full max-w-7xl my-0 mx-auto">{children}</main>

      {showToTop && (
        <div
          className="fixed bottom-6 right-6 w-12 h-12 bg-slate-50 shadow-md rounded-full flex justify-center items-center text-2xl cursor-pointer"
          onClick={scrollToTop}
          aria-hidden="true"
        >
          <FiArrowUp />
        </div>
      )}
    </div>
  );
}
