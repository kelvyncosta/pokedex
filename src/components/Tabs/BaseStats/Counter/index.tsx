import { useEffect } from 'react';
import { v4 as uuidV4 } from 'uuid';

interface ICounterProps {
  target: number;
  increment?: number;
}

function Counter({ target, increment = 1 }: ICounterProps): JSX.Element {
  const id = uuidV4();

  useEffect(() => {
    const counter = document.getElementById(id);

    if (counter) {
      const updateCount = () => {
        const amount = +counter.innerText;

        if (amount < target) {
          counter.innerText = String(Math.ceil(amount + increment));
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = String(target);
        }
      };

      updateCount();
    }
  }, [id, target, increment]);

  return <span id={id}>0</span>;
}

export { Counter };
