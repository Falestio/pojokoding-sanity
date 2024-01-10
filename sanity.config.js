import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {markdownSchema} from 'sanity-plugin-markdown'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export default defineConfig({
    name: 'default',
    title: 'Pojokoding',

    projectId: 'diimhezu',
    dataset: 'prod',

    plugins: [
        deskTool({
            structure: (S, context) => {
                return S.list()
                    .title('Content')
                    .items([
                        orderableDocumentListDeskItem({type: 'course', S, context}),
                        orderableDocumentListDeskItem({type: 'content', S, context}),
                        orderableDocumentListDeskItem({type: 'author', S, context}),
                        orderableDocumentListDeskItem({type: 'languageConfig', S, context}),
                        orderableDocumentListDeskItem({type: 'subcourse', S, context}),
                    ])
            },
        }),
        visionTool(),
        markdownSchema(),
    ],

    schema: {
        types: schemaTypes,
    },
})
