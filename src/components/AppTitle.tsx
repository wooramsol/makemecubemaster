import { APP_VERSION } from '../lib/appVersion';

export function AppTitle() {
  return (
    <header className="app-title" aria-label="Application title">
      <p className="app-title-name">MakeMeCubeMaster.v{APP_VERSION}</p>
      <p className="app-title-credit">created by Ramsol</p>
    </header>
  );
}
