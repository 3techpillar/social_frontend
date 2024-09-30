import { View, Text, Image } from 'react-native'
import React from 'react'

const Provider = ({src}) => {
  return (
    <View className='flex flex-col items-center justify-center gap-3'>
      <Text className='text-base font-bold'>continue with</Text>
      <Image source={src} alt='provider' className='w-12 h-12' />
    </View>
  )
}

export default Provider