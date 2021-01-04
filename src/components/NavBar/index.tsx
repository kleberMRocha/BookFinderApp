import React from 'react';
import {Container, LinkNav} from './styles';
import {FaSearch,FaHeart} from 'react-icons/fa'


const NavBar:React.FC = () =>{

    return (
        <Container>
            
            <nav>
                <ul>
                   <li><LinkNav to="/"><FaSearch color='#fff' /> Search</LinkNav></li> 
                   <li><LinkNav to="/wishlist"><FaHeart color='tomato' /> WishList</LinkNav></li> 
                </ul>
            </nav>
        </Container>
    )

}

export default NavBar;