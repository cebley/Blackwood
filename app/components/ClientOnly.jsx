import { useState, useEffect } from "react";

/**
 * ClientOnly wrapper component for SSR-incompatible packages.
 * Renders children only on the client side after hydration.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to render on client only
 * @param {React.ReactNode} props.fallback - Optional fallback to show during SSR
 */
const ClientOnly = ({ children, fallback = null }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return fallback;
  }

  return children;
};

export default ClientOnly;
