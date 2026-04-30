import { useRef, useState } from "react"

export default function RegisterAlbum({ addAlbum }) {
    const [album, setAlbum] = useState({
        title: "",
        userId: NaN,
        saved: false,
        category: "Music"
    });

    const titleRef = useRef();
    const userIdRef = useRef()

    const setTitle = (event) => {
        setAlbum(data => {
            return {...data, title: event.target?.value ?? ""}
        })
    }

    const setUserId = (event) => {
        setAlbum(data => {
            return {...data, userId: Number(event.target?.value ?? 0)}
        })
    }

    const setSaved = (event) => {
        setAlbum(data => {
            return {...data, saved: event.target?.checked ?? false}
        })
    }

    const setCategory = (event) => {
        setAlbum(data => {
            return {...data, category: event.target?.value ?? ""}
        })
    }

    const registerAlbum = () => {
        if (!titleRef.current?.reportValidity()) return
        if (!userIdRef.current?.reportValidity()) return

        addAlbum(album);
        setAlbum({
            title: "",
            userId: NaN,
            saved: false,
            category: ""
        })

        titleRef.current?.focus();
    }

    return <div>
        <h2>Register Album</h2>
        <form>
            <input type="text" ref={titleRef} required placeholder="Title" minLength={1} value={album.title} onChange={setTitle} />
            <input type="number" ref={userIdRef} placeholder="User Id" min={0} value={album.userId} onChange={setUserId} />
            <label><input type="checkbox" checked={album.saved} onChange={setSaved} /> Saved</label>
            <select value={album.category} onChange={setCategory}>
                <option value="Music">Music</option>
                <option value="Photography">Photography</option>
                <option value="Art">Art</option>
            </select>
            <button onClick={registerAlbum}>Submit</button>
        </form>
    </div>
}