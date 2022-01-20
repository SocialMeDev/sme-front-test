import { Drawer, DrawerContent } from '@chakra-ui/react'
import CustomDrawerHeader from '.'

export default {
  component: CustomDrawerHeader,
  title: 'Atoms/Drawer/Header/_1',
  argTypes: {
    title: {
      name: 'title',
      defaultValue: 'Título do Drawer',
      description: 'string',
      control: {
        type: 'text',
      },
    },
    onClose: {
      name: 'onClose',
      table: {
        type: {
          summary: '() => void',
        },
      },
    },
  },
}

export const Basic = (args) => (
  <Drawer isOpen={true}>
    <DrawerContent>
      <CustomDrawerHeader {...args} />
    </DrawerContent>
  </Drawer>
)
