import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'course',
    title: 'Course',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'markdown',
        }),
        defineField({
            name: 'shortDescription',
            title: 'Short Description',
            type: 'string',
        }),
        
        defineField({
            name: 'learningScope',
            title: 'Scope',
            type: 'markdown',
        }),

        defineField({
            name: 'learningObjectives',
            title: 'Objectives',
            type: 'markdown',
        }),

        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
        }),
        defineField({
            name: 'difficulty',
            title: 'Difficulty',
            type: 'string',
            options: {
                list: [
                    {title: 'Beginner', value: 'beginner'},
                    {title: 'Intermediate', value: 'intermediate'},
                    {title: 'Advanced', value: 'advanced'},
                ],
            },
        }),
        defineField({
            name: 'prerequisites',
            title: 'Prerequisites',
            type: 'markdown',
        }),

        defineField({
            name: 'postCount',
            title: 'Post Count',
            type: 'number',
        }),

        defineField({
            name: 'exerciseCount',
            title: 'Exercise Count',
            type: 'number',
        }),

        defineField({
            name: 'orderRank',
            title: 'Order Rank',
            type: 'string',
        }),
    ],
})
