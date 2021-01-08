export const schema = {
    name: 'companyConfig',
    title: 'Company Config',
    type: 'document',
    icon: (): string => '',
    // __experimental_actions: ['update', 'publish'],
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
    ],
};
