export default function AlbumCard({ album }) {
    return <div>
        <div>Id: {album.id}</div>
        <div>userId: {album.userId}</div>
        <div>Title: {album.title}</div>
        <div>Saved: {album.saved ? "Yes" : "No"}</div>
        {album.category && <div>Category: {album.category}</div>}
        {album.saved && <div>Saved album</div>}
        {album.category === "Art" && <div>Art Category</div>}
    </div>
}