import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	useStyleConfig
} from '@chakra-ui/react'

export default function CustomBreadcrumb(props) {
	const { fontWeight, fontSize, items, ...rest } = props

	const styles = useStyleConfig('CustomBreadcrumb', { fontWeight, fontSize })

	return (
		<Breadcrumb fontWeight={fontWeight} fontSize={fontSize} sx={styles} {...rest}>
			{items.map((item) => (
				<BreadcrumbItem key={item.label} isCurrentPage={item.isCurrentPage}>
					<BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
				</BreadcrumbItem>
			))}
		</Breadcrumb>
	)
}
