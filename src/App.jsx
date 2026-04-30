// Student: Elvir Avdiji | ID: 132524.

import { useCallback, useEffect, useMemo, useState } from 'react'
import './App.css'
import AlbumCard from './components/AlbumCard';
import RegisterAlbum from './components/RegisterAlbum';

function App() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const albumCount = useMemo(() => albums.length, [albums])

  const addAlbum = useCallback((album) => {
    return setAlbums(data => [...data, {...album, id: Date.now()}])
  }, [albums])

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
      <h1>Albums ({albumCount})</h1>
      <ul style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem"
      }}>
        {albums.map(album => <li key={album.id}><AlbumCard album={album} /></li>)}
      </ul>
      <RegisterAlbum addAlbum={addAlbum} />
      </div>
  )
}

export default App
