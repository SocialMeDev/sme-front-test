import Loader from '.'

const props = {
	text: 'Carregando...'
}

export default {
	component: Loader,
	title: 'Atoms/Loader/Animated/_1',
	args: props,
	argTypes: {
		text: {
			name: 'text',
			control: {
				type: 'text'
			},
			description: 'string'
		},
		primaryColor: {
			defaultValue: 'blue.500',
			name: 'primaryColor',
			control: {
				type: 'text'
			},
			description: 'string'
		},
		secondaryColor: {
			defaultValue: 'blue.200',
			name: 'secondaryColor',
			control: {
				type: 'text'
			},
			description: 'string'
		}
	}
}
export const Common = (args) => <Loader {...props} {...args} />
