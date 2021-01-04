import React from 'react';
import {Container} from './styles';
import {FaSearch,FaHeart} from 'react-icons/fa'


const NavBar:React.FC = () =>{

    return (
        <Container>
            <ul>
                <li><FaSearch color='#fff' /> Search</li>
                <li><FaHeart color='tomato' /> WishList</li>
            </ul>
        </Container>
    )

}

export default NavBar;