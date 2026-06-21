interface LoadingScreenProps {
  message?: string;
}

export function LoadingScreen({ message = '준비 중...' }: LoadingScreenProps) {
  return (
    <div className="loading-screen">
      <div className="loading-spinner" />
      <p>{message}</p>
    </div>
  );
}
