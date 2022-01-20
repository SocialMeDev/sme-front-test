import { VStack, Input, Button } from '@chakra-ui/react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { patternEmail } from 'utils/patterns'

import FormItem from '.'

const props = {
  copyText: 'storybook é muito bom',
  message: 'Mensagem customizada do texto copiado',
}

export default {
  component: FormItem,
  title: 'Atoms/FormItem/Basic/_1',
  args: props,
  argTypes: {
    label: {
      name: 'label',
      defaultValue: 'Email',
      description: 'string',
      control: {
        type: 'text',
      },
    },
    error: {
      table: {
        type: {
          summary: 'FieldError',
        },
      },
    },
  },
}

export const Basic = (args) => {
  const validator = yup.object().shape({
    email: yup
      .string()
      .required('O email é obrigatório')
      .test('match', 'Email inválido', function (contact = '') {
        return patternEmail.test(contact)
      }),
  })

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(validator),
  })

  const onSubmit = (data) => {
    console.log('data', data)
  }

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)} align="flex-start">
      <FormItem {...args} error={errors.email}>
        <Input size="md" maxW="300px" {...register('email')} />
      </FormItem>

      <Button size="md" variant="solid">
        Submit
      </Button>
    </VStack>
  )
}
