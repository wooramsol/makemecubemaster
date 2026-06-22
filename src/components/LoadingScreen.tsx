interface LoadingScreenProps {
  message?: string;
  overlay?: boolean;
}

export function LoadingScreen({ message = 'Loading…', overlay = false }: LoadingScreenProps) {
  return (
    <div className={`loading-screen${overlay ? ' overlay' : ''}`}>
      <div className="loading-spinner" />
      <p>{message}</p>
    </div>
  );
}
