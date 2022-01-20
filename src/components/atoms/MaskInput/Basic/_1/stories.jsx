import { Text, Box } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { cpfMask } from 'utils/masks'

import MaskInput from '.'

export default {
  component: MaskInput,
  title: 'Atoms/MaskInput/Basic/_1',

  argTypes: {
    name: {
      name: 'name',
      defaultValue: 'mask',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    control: {
      name: 'control',
      table: {
        type: {
          summary: 'Control',
        },
      },
    },
    mask: {
      name: 'mask',
      table: {
        type: {
          summary: '(string) => string',
        },
      },
    },
    limit: {
      defaultValue: 14,
      name: 'limit',
      control: {
        type: 'number',
      },
      table: {
        type: {
          summary: 'number - O máximo de caracteres da máscara',
        },
      },
    },
  },
}
export const Common = (args) => {
  const { control, watch } = useForm({
    reValidateMode: 'onBlur',
    defaultValues: { input: 'Value' },
  })

  return (
    <Box maxW="300px">
      <MaskInput
        {...args}
        name="mask"
        control={control}
        mask={cpfMask}
        limit={14}
      />

      <Text mt="4" fontSize="lg">
        CPF: {watch('mask')}
      </Text>
    </Box>
  )
}
