import { ToastContainer as Container } from 'react-toastify';

import { useTheme } from 'hooks/theme';

export function ToastContainer() {
  const { theme } = useTheme();

  return <Container position="top-center" autoClose={2500} theme={theme} />;
}
