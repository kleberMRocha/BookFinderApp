import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';


export const Container = styled.View`
    background-color:#fff;
    width:100%;
    margin-top:5px;
    border-radius:10px;
    padding:2%;
`;

export const Text = styled.Text`
    text-align:center;
    font-size:18px;
    color:#363533;
`;

export const BookImage = styled.Image`
    width:150px;
    height:200px;
    margin:0 auto;

`;

export const SeeMore = styled(RectButton)`
    width:100%;
    height:50px;
    margin:0 auto;
    background:#2696ff;
    border-radius:10px;
    margin-top:5px;
    justify-content:center;
`;

export const SeeMoreText = styled.Text`
    text-align:center;
    font-size:20px;
    color:#fff;
    font-weight:bold;
`;

export const BuyThis = styled(RectButton)`
    width:100%;
    height:50px;
    margin:0 auto;
    background:#a9e055;
    border-radius:10px;
    margin-top:5px;
    justify-content:center;
`;

export const BuyThisText = styled.Text`
    text-align:center;
    font-size:20px;
    color:darkgreen;
    font-weight:bold;
`;

export const AddWishlist = styled(RectButton)`
    width:100%;
    height:50px;
    margin:0 auto;
    background:#e3a136;
    border-radius:10px;
    margin-top:5px;
    justify-content:center;
`;

export const WishlistText = styled.Text`
    text-align:center;
    font-size:20px;
    color:#292828;
    font-weight:bold;
`;
