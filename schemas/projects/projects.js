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
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: 'name',
                maxLength: 96,
              }
        },
        {
            name: "description",
            title: "Project Description",
            type: "string"
        },
        {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
        hotspot: true,
        },
        },
        {
            name: "year",
            title: "Project Year",
            type: "number"
        },
        {
            name: "tags",
            title: "Stack Tags",
            type: "array",
            of: [{type: 'reference', to: {type: 'category'}}]
        },
        {
            name: "github",
            title: "Github",
            type: "string"
        },
        {
            name: "address",
            title: "Address",
            type: "string"
        },
    ]
}