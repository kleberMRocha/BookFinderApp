import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const Container = styled.View`
	flex: 1;
	background-color: #7694f5;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.Text`
	font-family:cursive;
    font-weight:bold;
    color:#fff;
    font-size: 70px;
`;

export const IMG = styled.Image`
	width:  150px;
    height: 150px;
`;

export const MyFavorites = styled(TouchableOpacity)`
    margin-top:15px;
    width:300px;
    height:50px;
    align-items:center;
    background:#1f2e5e;
    border-radius:10px;
`;

export const SearchBooks = styled(TouchableOpacity)`
    margin-top:15px;
    width:300px;
    height:50px;
    align-items:center;
    background:#485da3;
    border-radius:10px;
`;

export const ButtonText = styled.Text`
   color: #fff;
   font-size:30px;
   width:100%;
   text-align:center;
`;

