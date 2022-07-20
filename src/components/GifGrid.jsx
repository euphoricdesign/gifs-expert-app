import GifItem from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
  const { images, loading } = useFetchGifs(category);

  return (
    <>
      {
        loading ? (
          <h3>Loading...</h3>
        ) : (
          <div>
            <h3>{category}</h3>

            <div className="card-grid">
              {
                images.map((img) => (
                  <GifItem key={img.id} {...img} />
                ))
              }
            </div>
          </div>
        )
      }
    </>
  );
};
