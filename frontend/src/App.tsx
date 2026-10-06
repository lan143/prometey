import { useState } from 'preact/hooks';
import { TabBar, type TabItem } from './components/TabBar';
import { StatusPage } from './pages/Status';
import { ConnectionsPage } from './pages/Connections';
import { BoilerPage } from './pages/Boiler';
import { RoomsPage } from './pages/Rooms';
import { BackupPage } from './pages/Backup';
import { NetworkPage } from './pages/Network';

type TabId = 'status' | 'connections' | 'network' | 'boiler' | 'rooms' | 'backup';

const TABS: ReadonlyArray<TabItem<TabId>> = [
  { id: 'status', label: 'Status' },
  { id: 'connections', label: 'MQTT' },
  { id: 'network', label: 'Network' },
  { id: 'boiler', label: 'Boiler' },
  { id: 'rooms', label: 'Rooms' },
  { id: 'backup', label: 'Backup' },
];

function renderPanel(tab: TabId) {
  switch (tab) {
    case 'status':
      return <StatusPage />;
    case 'connections':
      return <ConnectionsPage />;
    case 'network':
      return <NetworkPage />;
    case 'boiler':
      return <BoilerPage />;
    case 'rooms':
      return <RoomsPage />;
    case 'backup':
      return <BackupPage />;
  }
}

export function App() {
  const [tab, setTab] = useState<TabId>('status');

  return (
    <>
      <header class="app-header">
        <div class="brand">
          <svg
            class="brand-mark"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fill="currentColor"
              d="M12 23c4.4 0 7.5-2.7 7.5-6.7 0-2.3-1-4.3-2.3-6.1-.8 1.6-1.8 2.6-2.9 3.3.4-1.4.2-3.1-.7-5C12.7 6.1 11.3 4.3 10.4 2c-.3 2.3-1.4 4-2.7 5.5C6.4 9.1 4.5 11 4.5 15c0 4 3.1 8 7.5 8z"
            />
            <path
              fill="currentColor"
              opacity=".45"
              d="M12 21.2c-1.6 0-2.8-1.1-2.8-2.8 0-1.3.7-2.1 1.5-3 .3.7.8 1.1 1.4 1.4-.2-1.2.1-2.4 1-3.5.9 1.2 1.4 2.6 1.4 4 0 2.3-1.4 3.9-2.5 3.9z"
            />
          </svg>
          <h1>Prometey</h1>
        </div>
        <span class="hint">offline device panel</span>
      </header>
      <TabBar tabs={TABS} active={tab} onSelect={setTab} />
      <main
        class="tab-content"
        id={`panel-${tab}`}
        role="tabpanel"
        aria-labelledby={`tab-${tab}`}
      >
        {renderPanel(tab)}
      </main>
    </>
  );
}
