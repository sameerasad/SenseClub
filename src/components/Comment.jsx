import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

const Comment = ({ comment }) => {
    
  const [replyText, setReplyText] = useState('');
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replies, setReplies] = useState(comment.replies);
  function generateUniqueId() {
    const timestamp = Date.now().toString(36); // Convert current timestamp to base36 string
    const randomNum = Math.random().toString(36).substr(2, 5); // Generate a random number and convert to base36 string
    const uniqueId = timestamp + randomNum; // Concatenate timestamp and random number
  
    return uniqueId;
  }
  

  const handleReplySubmit = () => {
    const newReply = {
      id: generateUniqueId(), // Implement a function to generate unique IDs
      text: replyText,
      userId:Math.random(),
      replies: [],
    };

    const updatedReplies = [...replies, newReply];
    console.log(updatedReplies);
    setReplies(updatedReplies);
    setShowReplyInput(false);
    setReplyText('');
  };

  return (
    <View style={styles.commentContainer}>
      <Text style={styles.commentText}>{comment.text}</Text>

      {/* Render existing replies */}
      {replies.map((reply) => (
        <Comment key={reply.id} comment={reply} />
      ))}

      {/* Reply input */}
      {showReplyInput ? (
        <View style={styles.replyContainer}>
          <TextInput
            style={styles.replyInput}
            value={replyText}
            onChangeText={setReplyText}
            placeholder="Type your reply..."
          />
          <Button title="Reply" onPress={handleReplySubmit} />
        </View>
      ) : (
        <TouchableOpacity
          
          onPress={() => setShowReplyInput(true)}
        >
            <Text>reply</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = {
    
  commentContainer: {
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 4,
  },
  commentText: {
    fontSize: 16,
    marginBottom: 5,
  },
  replyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  replyInput: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 5,
    fontSize: 14,
  },
  replyText: {
    fontSize: 14,
    marginBottom: 3,
  },
};

export default Comment;
