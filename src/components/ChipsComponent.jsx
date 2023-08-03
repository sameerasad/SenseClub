import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ChipsComponent = () => {
  const [selectedChip, setSelectedChip] = useState(null);

  const chipsData = [
    { id: 1, label: 'All', color: '#F0F0F0', textColor: '#000000' },
    { id: 2, label: 'Giveaways', color: '#F0F0F0', textColor: '#000000' },
    { id: 3, label: 'Deals', color: '#F0F0F0', textColor: '#000000' },
    { id: 4, label: 'Events', color: '#F0F0F0', textColor: '#000000' },
    // Add more chip data here as needed
  ];

  const handleChipPress = (chipId) => {
    setSelectedChip(chipId);
  };

  return (
    <View style={styles.container}>
      {chipsData.map((chip) => (
        <TouchableOpacity
          key={chip.id}
          onPress={() => handleChipPress(chip.id)}
          activeOpacity={0.8}
          style={[
            styles.chip,
            {
              backgroundColor: chip.id === selectedChip ?  '#b59f84' : chip.color,
              borderColor: chip.id === selectedChip ?  '#b59f84' :  '#b59f84',
            },
          ]}
        >
          <Text style={{ color: chip.id === selectedChip ? '#FFFFFF' :  '#b59f84',fontFamily:'Poppins-SemiBold' }}>
            {chip.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chip: {
    margin: 5,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 2,
  },
});

export default ChipsComponent;
