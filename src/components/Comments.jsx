import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import Comment from './Comment';

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
      {/* Render existing comments */}
      {commentList.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}

      {/* New comment input */}
      <View style={styles.newCommentContainer}>
        <TextInput
          style={styles.newCommentInput}
          value={newCommentText}
          onChangeText={setNewCommentText}
          placeholder="Type your comment..."
        />
     <Button title="Add Comment" onPress={handleCommentSubmit} /> 
      </View>
    </View>
  );
};

const styles = {
  newCommentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    position:'bottom',
  },
  newCommentInput: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 5,
    fontSize: 14,
  },
};

export default Comments;
