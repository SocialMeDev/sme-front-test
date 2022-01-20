import Breadcrumb from '.'

const props = {
	items: [
		{
			href: '/',
			label: 'Administrador'
		},
		{
			href: '/',
			label: 'Doações'
		},
		{
			href: '/',
			label: 'Julgamento'
		}
	]
}

export default {
	component: Breadcrumb,
	title: 'Atoms/Breadcrumb/Basic/_1',
	args: props,
	argTypes: {
		items: {
			table: {
				type: {
					summary: '[ { href: string, label: string } ]'
				}
			}
		}
	}
}

export const Basic = (args) => <Breadcrumb {...props} {...args} />
