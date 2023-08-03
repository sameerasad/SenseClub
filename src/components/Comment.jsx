import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';

const Comment = ({comment}) => {
  const [replyText, setReplyText] = useState('');
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [showReplies, setShowReplies] = useState(false); 
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
      userId: Math.random(),
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
      <View style={{flexDirection: 'column'}}>
        <View style={{flexDirection: 'row',alignItems:'center',}}>
          <View style={{marginBottom:5}}>
          <Image
              style={{width: 40, height: 40}}
              source={require('../assets/images/circular-avatar.png')}
            />
          </View>
          <View style={{marginLeft:10}}>
            <Text style={{fontFamily:'Poppins-SemiBold',color:'black',fontSize:17}}>@young4ever</Text>
            <Text style={{fontFamily:'Poppins-Medium',color:'#2525255E'}}>5hrs ago</Text>
          </View>
          <View style={{marginLeft:10}}>
          <TouchableOpacity onPress={()=>setShowReplyInput(true)}>
          <Image
              style={{tintColor:'#2525255E'}}
              source={require('../assets/images/replyIcon.png')}
            />
          </TouchableOpacity>
         
          </View>
        </View>
        <Text style={styles.commentText}>{comment.text}</Text>
      </View>

      {/* Render existing replies */}
      {showReplies && replies.map(reply => (
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
          <Button title="Reply" onPress={handleReplySubmit} color='#b59f84' />
        </View>
      ) : null
      }
       {/* (
        <TouchableOpacity onPress={() => setShowReplyInput(true)}>
          <Text>reply</Text>
        </TouchableOpacity>
      )} */}
      {replies.length > 0 && (
        <View style={{width:'32%'}}><Button
          title={showReplies ? 'Hide Replies' : 'Show Replies'}
          onPress={() => setShowReplies(!showReplies)}
          style={styles.toggleButton}
          color='#b59f84'
          
        /></View>
        
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
    fontFamily:'Poppins-Medium'
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
