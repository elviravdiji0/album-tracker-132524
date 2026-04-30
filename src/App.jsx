import { useEffect, useState } from 'react'
import './App.css'
import AlbumCard from './components/AlbumCard';

function App() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums").then(res => res.json()).then(data => {
      setAlbums(data);
      setLoading(false);
    }).catch(error => {
      setError(error);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>

  if (error) return <div>Error: {error?.message}</div>

  return (
    <div>
      <ul style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem"
      }}>
        {albums.map(album => <li key={album.id}><AlbumCard album={album} /></li>)}
      </ul>
    </div>
  )
}

export default App
