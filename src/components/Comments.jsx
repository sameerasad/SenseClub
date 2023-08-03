import React, { useState } from 'react';
import { View, TextInput, Button, Text,Image,TouchableOpacity } from 'react-native';
import Comment from './Comment';
import { images } from '../assets/images/Index';
import { colors } from '../config/colors';

const Comments = ({ comments }) => {
  const [newCommentText, setNewCommentText] = useState('');
  const [commentList, setCommentList] = useState(comments);
  function generateUniqueId() {
    const timestamp = Date.now().toString(36); // Convert current timestamp to base36 string
    const randomNum = Math.random().toString(36).substr(2, 5); // Generate a random number and convert to base36 string
    const uniqueId = timestamp + randomNum; // Concatenate timestamp and random number
  
    return uniqueId;
  }
  

  const handleCommentSubmit = () => {
    const newComment = {
      id: generateUniqueId(),
      userId:Math.random(),

      text:<Text>{newCommentText}</Text> ,
      replies: [],
    };

    const updatedCommentList = [...commentList, newComment];
      
    setCommentList(updatedCommentList);
    console.log(updatedCommentList),
    setNewCommentText('');
  };

  return (
    <View>
    <Text style={styles.PostHeading}>Comments</Text>
      {/* Render existing comments */}
      {commentList.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}

      {/* New comment input */}
      <View style={{flexDirection:'column',flex:1,}}>
        <View style={styles.newCommentContainer}>
          <TextInput
            style={styles.newCommentInput}
            value={newCommentText}
            onChangeText={setNewCommentText}
            placeholder="Leave comment..."
            placeholderTextColor='white'
            
          />
          <TouchableOpacity onPress={()=> newCommentText.length? handleCommentSubmit():()=>{}} >
          <View style={{borderWidth:0,padding:10,borderRadius:30,backgroundColor:'#b59f84'}}>
          <Image 
   style={{width: 30, height: 30,}}
                      source={require('../assets/images/paper-plane.png')}
  
          />
          </View>
          </TouchableOpacity>
       {/* <Button title="Add Comment" onPress={handleCommentSubmit} />  */}
        </View>
        <View style={{height:20,backgroundColor:'black'}}></View>
        </View>
    </View>
  );
};

const styles = {
  newCommentContainer: {
    flexDirection: 'row',
 
    // alignItems: 'center',
    marginTop: 10,
    // marginBottom: 10,
padding:10,

backgroundColor:'#4C4E52',

  },
  newCommentInput: {
    flex: 1,
    // marginRight: 10,
   

    // borderWidth: 1,
    // borderColor: '#ccc',
    borderRadius: 4,
    padding: 5,
    fontSize: 14,
  },
  PostHeading: {
    padding: 20,
    fontSize: 25,
    color: 'black',
    fontFamily:'Poppins-ExtraBold'
  },
};

export default Comments;
