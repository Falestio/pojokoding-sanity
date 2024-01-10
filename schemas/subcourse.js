import {defineType, defineField} from 'sanity'

export default {
    name: 'subcourse',
    title: 'Subcourse',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
        }),

        defineField({
            name: 'course',
            title: 'Course',
            type: 'reference',
            to: [{type: 'course'}],
        }),

        defineType({
            name: 'contents',
            title: 'Contents',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'content' } }],
            options: {
                filter: `_type == "content"`
            }
        }),
        defineField({
            name: 'orderRank',
            title: 'Order Rank',
            type: 'string',
        }),
    ],
}
