import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'languageConfig',
    title: 'Language Config',
    type: 'document',

    fields: [
        defineField({
            name: 'languageName',
            title: 'Language Name',
            type: 'string',
        }),
        defineField({
            name: 'languageId',
            title: 'Language ID',
            type: 'number',
        }),

        // ORDER RANK
        defineField({
            name: 'orderRank',
            title: 'Order Rank',
            type: 'string',
        }),
    ],
})
