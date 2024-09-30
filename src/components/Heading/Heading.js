import { View, Text } from 'react-native'
import React from 'react'

const Heading = ({title, desc}) => {
  return (
    <View className="flex flex-col items-center justify-center mb-12 gap-2">
      <Text className='text-center text-3xl font-serif font-extrabold text-blue-800'>{title}</Text>
      <Text className='text-center text-base font-medium  text-gray-700'>{desc}</Text>
    </View>
  )
}

export default Heading