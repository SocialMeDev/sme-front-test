
import Link from '.'

export default {
	component: Link,
	title: 'Atoms/Link/Text/_1',
	argTypes: {
		href: {
			name: 'href',
			defaultValue: '/my-page',
			table: {
				type: {
					summary: 'string'
				}
			}
		}
	}
}

export const Common = (args) => (
	<Link {...args}>
		Um texto com link
	</Link>
)
