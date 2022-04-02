import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./cats.css";

const Cats = () => {
    const [catImages, setCatImages] = useState([]);
    const [page, setPage] = useState(1);

    const { id } = useParams();

    const addPage = () => {
        setPage(page + 1)
    }

    useEffect(() => {
        setCatImages([]);
        setPage(1)
    }, [id]);

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${id}`)
            .then(res => res.json())
            .then(data => setCatImages([...catImages, ...data]))
    }, [page]);
    return (
        <>
            <div>
                {catImages.map((catImage) => <img className="cats-image" src={catImage.url} />)}
            </div>
            <div>
                <button onClick={addPage}>Load more</button>
                {page}
            </div>
        </>
    )
}

export default Cats;