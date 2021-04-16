import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategorias}) => {

    const [input, setinput] = useState('');

    const handleChange = (e) =>{
        setinput(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(input.trim().length>2){
            setCategorias(cat =>[ input,...cat]);

        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="categoria" 
                    placeholder="Categorias"
                    value={input} 
                    onChange={handleChange}/>
                
            </form>
        </>
    )

}
AddCategory.propTypes={
    setCategorias: PropTypes.func.isRequired,

}

