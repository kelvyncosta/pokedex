import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

import { scrollToTop } from 'shared/utils/scrollToTop';

import { Component } from './styles';

function ToTop(): JSX.Element {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 400 && !isActive) {
        setIsActive(true);
      }

      if (window.scrollY <= 400 && isActive) {
        setIsActive(false);
      }
    });
  }, [isActive]);

  return (
    <Component isActive={isActive} onClick={scrollToTop}>
      <FiArrowUp />
    </Component>
  );
}

export { ToTop };
