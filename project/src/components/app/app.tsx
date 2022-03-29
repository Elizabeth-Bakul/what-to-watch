import MainPage from '../main-page/main-page';

type PromoFilmProps = {
  title: string;
  genre: string;
  yearRelease: number;
};
function App({ title, genre, yearRelease }: PromoFilmProps): JSX.Element {
  return <MainPage title={title} genre={genre} yearRelease={yearRelease} />;
}

export default App;
