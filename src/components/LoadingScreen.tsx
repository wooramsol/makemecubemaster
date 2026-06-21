interface LoadingScreenProps {
  message?: string;
  overlay?: boolean;
}

export function LoadingScreen({ message = '준비 중...', overlay = false }: LoadingScreenProps) {
  return (
    <div className={`loading-screen${overlay ? ' overlay' : ''}`}>
      <div className="loading-spinner" />
      <p>{message}</p>
    </div>
  );
}
