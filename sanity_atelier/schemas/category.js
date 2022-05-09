export default {
	name: 'category',
	title: 'Category',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
		},
		{
			name: 'brand',
			title: 'Brand',
			type: 'string',
		},
		{
			name: 'order',
			title: 'Order',
			type: 'number',
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
	],
};
