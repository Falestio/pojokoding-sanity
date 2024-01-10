import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'content',
    title: 'Content',
    type: 'document',
    fields: [
        // TITLE
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),

        defineField({
            name: 'displayTitle',
            title: 'Display Title',
            type: 'string',
        }),

        // SLUG
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'displayTitle',
                maxLength: 96,
            },
        }),

        // COURSE (REFERENCE)
        defineField({
            name: 'course',
            title: 'Course',
            type: 'reference',
            to: [{type: 'course'}],
        }),

        // CONTENT TYPE (ENUM)
        defineField({
            name: 'contentType',
            title: 'Content Type',
            type: 'string',
            options: {
                list: [
                    {title: 'Exercise', value: 'exercise'},
                    {title: 'Post', value: 'post'},
                ],
            },
        }),

        // AUTHOR
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: {type: 'author'},
        }),

        // ARTICLE MAIN IMAGE
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
            hidden: ({document}) => document?.contentType == 'exercise',
        }),

        // ARTICLE PUBLISHED AT
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
            hidden: ({document}) => document?.contentType == 'exercise',
        }),

        // ARTICLE BODY
        defineField({
            name: 'markdown',
            title: 'Markdown',
            type: 'markdown',
            hidden: ({document}) => document?.contentType == 'exercise',
        }),

        // ARTICLE EXCERPT
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 3,
            hidden: ({document}) => document?.contentType == 'exercise',
        }),

        defineField({
            name: 'quiz',
            title: 'Quiz',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'question',
                            title: 'Question',
                            type: 'markdown',
                        },
                        {
                            name: 'choices',
                            title: 'Choices',
                            type: 'array',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        {
                                            name: 'text',
                                            title: 'Text',
                                            type: 'markdown',
                                        },
                                        {
                                            name: 'isCorrect',
                                            title: 'Is Correct',
                                            type: 'boolean',
                                        },
                                        {
                                            name: 'explanation',
                                            title: 'explanation',
                                            type: 'markdown',
                                        },
                                        {
                                            name: 'disabled',
                                            title: 'Disabled',
                                            type: 'boolean',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
            initialValue: {
                disabled: false,
            },
            hidden: ({document}) => document?.contentType == 'exercise',
        }),

        // EXERCISE LANGUAGE CONFIG (REFERENCE)
        defineField({
            name: 'languageConfig',
            title: 'Language Config',
            type: 'reference',
            to: [{type: 'languageConfig'}],
            hidden: ({document}) => document?.contentType == 'post',
        }),

        // EXERCISE PROMPT
        defineField({
            name: 'prompt',
            title: 'Prompt',
            type: 'markdown',
            hidden: ({document}) => document?.contentType == 'post',
        }),

        defineField({
            name: 'startingCode',
            title: 'Starting Code',
            type: 'markdown',
            hidden: ({document}) => document?.contentType == 'post',
        }),

        defineField({
            name: 'compileCode',
            title: 'Compile Code',
            type: 'markdown',
            hidden: ({document}) => document?.contentType == 'post',
        }),

        // EXERCISE TEST CASES
        defineField({
            name: 'testCases',
            title: 'Test Cases',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'testTitle',
                            title: 'Test Title',
                            type: 'string',
                        },
                        {
                            name: 'testDesc',
                            title: 'Test Description',
                            type: 'string',
                        },
                        {
                            name: 'stdin',
                            title: 'stdin',
                            type: 'string',
                        },
                        {
                            name: 'expectedOutput',
                            title: 'Expected Output',
                            type: 'string',
                        },
                        {
                            name: 'functionCallExample',
                            title: 'Function Call Example',
                            type: 'string',
                        },
                    ],
                },
            ],
            hidden: ({document}) => document?.contentType == 'post',
        }),

        // ORDER RANK
        defineField({
            name: 'orderRank',
            title: 'Order Rank',
            type: 'string',
        }),
    ],
})
