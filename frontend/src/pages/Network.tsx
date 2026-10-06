import { useEffect, useRef } from 'preact/hooks';

export function NetworkPage() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = document.createElement('edn-network-page');
    // Same origin by default; use element.setAttribute('base-url', 'http://<device>')
    // to point at another ed-network device (needs CORS on that device).
    host.current?.append(element);
    return () => element.remove();
  }, []);

  return <div ref={host} />;
}
