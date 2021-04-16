import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/GetGifs'
import { GifItem } from './GifItem'

export const GifGrid = ({categoria}) => {
    const {data, loading} = useFetchGifs(categoria);
    // console.log(data)

    // const [images, setImages] = useState([])

    

    

    // getGifs();

    return (
        <div>
            <h3>{categoria}</h3>
            {loading&&<p>Cargando...</p>}
            <div className="cards ">
                {data.map(img=>{
                    return <GifItem key={img.id} {...img}/>
                })}
                
            </div>
            
        </div>
    )
}
