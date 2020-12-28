import React, { FormEvent, useCallback, useState } from 'react';
import { Container } from './style';


const InputGroup:React.FC = () => {

   const [focus,setFocus] = useState(false);
   const [isEmpty,setIsEmpty] = useState(false);
   const [searchValue,setSearchValue] = useState('');

   const handleSubmit = useCallback((event:FormEvent) => {
        event.preventDefault();
        if(searchValue.length === 0){
            setIsEmpty(true);
            return;
        } 

        setIsEmpty(false);

    },[searchValue]);


    return (
        <Container 
        isFocused={focus}
        isEmpty={isEmpty}
        >
            <form 
                onSubmit={(event) => handleSubmit(event)}
            >
                <input 
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    onChange={(e) => setSearchValue(e.target.value)}
                    value={searchValue}
                    type="text" 
                    placeholder={
                        isEmpty 
                        ? "The field cannot be empty" 
                        : "search a book"
                    } 
                />
                <button type="submit">
                     Search
                </button>
            </form>
        </Container>
    )
}

export default InputGroup;