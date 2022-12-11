import Pages from '../../src/components/Pages';
import GetInfo from '../../src/modules/GetInfo';

export async function getStaticProps(context) {
  const type = 'movie';
  const dataGenres = await GetInfo({ type });
  return {
    props: {
      dataGenres,
      type,
    },
    revalidate: 1 * 24 * 60 * 60,
  };
}
const Movies = function Movies({ dataGenres, type }) {
  return (
    <Pages type={type} dataGenres={dataGenres} />
  );
};

export default Movies;
