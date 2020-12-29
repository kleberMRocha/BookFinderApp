import React, { FormEvent, useCallback, useState } from 'react';
import { Container } from './style';

interface InputGroupProps{
    callback:Function;
}

const InputGroup:React.FC<InputGroupProps> = ({callback}) => {

   const [focus,setFocus] = useState(false);
   const [isEmpty,setIsEmpty] = useState(false);
   const [searchValue,setSearchValue] = useState('');
   const handleSubmit = useCallback((event:FormEvent) => {
        event.preventDefault();
        if(!searchValue){
            setIsEmpty(true);
            return;
        } 
        window.location.href = '#searchResult';
        setIsEmpty(false);
        callback(searchValue);

    },[searchValue,callback]);


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