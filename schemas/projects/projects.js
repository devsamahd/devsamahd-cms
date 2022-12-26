export default {
    name: "projects",
    title: "Projects",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Project Name",
            type: "string"
        },
        {
            name: "description",
            title: "Project Description",
            type: "string"
        },
        {
            name: "tags",
            title: "Stack Tags",
            type: "array",
            of: [{type: 'reference', to: {type: 'category'}}]
        },
    ]
}