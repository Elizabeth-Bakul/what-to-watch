import { Watch } from 'react-loader-spinner';

function LoadingScreen(): JSX.Element {
  return (
    <div>
      <Watch height="100" width="100" color="#00BFFF" />
      <p>Loading ...</p>
    </div>
  );
}

export default LoadingScreen;
