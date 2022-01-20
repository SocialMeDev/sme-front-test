import Loader from '.'

const props = {
  text: 'Carregando...',
  height: '300px',
}

export default {
  component: Loader,
  title: 'Atoms/Loader/Basic/_1',
  args: props,
  argTypes: {
    text: {
      name: 'text',
      description: 'string',
      control: {
        type: 'text',
      },
    },
    height: {
      defaultValue: '300px',
      name: 'height',
      description: 'string',
      control: {
        type: 'text',
      },
    },
  },
}
export const Common = (args) => <Loader {...props} {...args} />
