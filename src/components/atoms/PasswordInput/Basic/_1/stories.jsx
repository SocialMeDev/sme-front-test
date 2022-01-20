import { Text, Box } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import PasswordInput from '.'

export default {
  component: PasswordInput,
  title: 'Atoms/PasswordInput/Basic/_1',
  argTypes: {
    register: {
      name: 'register',
      table: {
        type: {
          summary: 'register={register(key)}',
        },
      },
    },
  },
}

export const Common = (args) => {
  const { register, watch } = useForm({
    reValidateMode: 'onBlur',
    defaultValues: { input: 'Value' },
  })

  return (
    <Box {...args} maxW="250px">
      <PasswordInput register={register('input')} />

      <Text mt="4" fontSize="md">
        Senha: {watch('input')}
      </Text>
    </Box>
  )
}
