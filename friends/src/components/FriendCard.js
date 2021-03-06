import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import {Link} from 'react-router-dom';

const Border = Styled.div`
border: 2px solid darkgray;
height: auto;
width: 300px;
padding: 10px;
margin: 5px;
`;

const Name = Styled.h1`
font-size: 18px;
font-weight: bold;
`;

const Data = Styled.p`
font-size: 15px;
font-style: italic;
text-decoration: none;
`;

const FriendCard = props => {

    return (
        <Border>
            <Link to={`/friend/${props.id}`}> 
               <Name>{props.name}</Name></Link>
               
            <Data>{props.age}</Data>
            <Data>{props.email}</Data>
            <Data>{props.location}</Data>
            <Link to={`/edit/${props.id}`}><button editFriend={props.editFriend}>Edit</button></Link>
           
           <Link to='/'> <button onClick={(e) => props.deleteFriend(props.id)}>Delete</button></Link>
        </Border>
    );
}

FriendCard.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string
}
export default FriendCard;