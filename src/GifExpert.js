import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpert = () =>{

    const [categorias, setCategorias] = useState(['Rick and Morty'] )

    // const handleAdd= ()=>{
        
    //     // const cat=categorias.concat('Death note');
    //     // setCategorias(cat);
    //     setCategorias([...categorias,'Death Note'])
    // }

    return (
            <>
                <h2>GifExpert</h2>
                <AddCategory setCategorias={setCategorias}/>
                <hr/>

                

                <ol>
                    {categorias.map(categoria =>{
                        return <GifGrid key={categoria} categoria={categoria}/>
                    })}
                </ol>
            </>
        );
    
}

export default GifExpert;