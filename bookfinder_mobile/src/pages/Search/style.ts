import styled from 'styled-components/native';
import {RectButton, TouchableOpacity} from 'react-native-gesture-handler';

export const Container = styled.ScrollView`
	flex: 1;
	background-color: #7694f5;
`;


export const Title = styled.Text`
	font-family:cursive;
    font-weight:bold;
    color:#fff;
    font-size: 70px;
`;

export const ContainerInput = styled.View`
    background:white;
    flex-direction:row;
    padding:0 8px;
    align-items:center;
    border-radius:10px;
    width:80%;
`;

export const InputSearch = styled.TextInput`
    background:white;
    width:70%;
`;

export const IMG = styled.Image`
	width:  300px;
    height: 200px;
`;

export const SearchBooks = styled(RectButton)`
    margin-top:15px;
    width:280px;
    height:50px;
    align-items:center;
    background:#485da3;
    border-radius:10px;
`;

export const TitleText = styled.Text`
   text-align:center;
   width:100%;
   color: #fff;
   font-size:30px;
   margin-bottom:5px;
`;

