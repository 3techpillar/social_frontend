// ../screens/SearchScreen/SearchScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]); // Placeholder for search results

  // Sample data (You can replace this with actual search results)
  const data = [
    'React Native',
    'JavaScript',
    'Programming',
    'Mobile Development',
    'Search Functionality',
  ];

  // Filter results based on query
  const filteredResults = data.filter(item => item.toLowerCase().includes(query.toLowerCase()));

  return (
    <View className="flex-1 p-4 bg-white">
      <TextInput
        className="h-12 border border-gray-300 rounded-lg px-4 mb-4"
        placeholder="Search..."
        value={query}
        onChangeText={setQuery}
      />
      <FlatList
        data={filteredResults}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View className="py-2 border-b border-gray-300">
            <Text className="text-lg">{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchScreen;
