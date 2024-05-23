import {
    Accordion,
    Button,
    Tabs,
    TabsHorizontal
} from "../components";

export const REGISTERED_COMPONENTS = [
    {
        component: Accordion,
        name: 'Accordion'
    },
    {
        component: Button,
        name: 'Button',
        inputs: [
            {
                name: 'text', 
                type: 'string',
                defaultValue: 'Nisha Sharma'
            },
        ]
    },
    {
        component : Tabs,
        name: 'Tabs',
        canHaveChildrens: true,
        inputs: [
            {
                name: 'tabs',
                type: 'list',
                defaultValue: [
                    {
                        label: 'Tab title',
                        content: []
                    }
                ],
                subFields: [
                    {
                        name: 'label',
                        type: 'string',
                        defaultValue: 'Tab title'
                    },
                    {
                        name: 'content',
                        type: 'uiBlocks',
                        defaultValue: []
                    }
                ]
            }
        ]
    },
    {
        component : TabsHorizontal,
        name: 'TabsHorizontal',
        canHaveChildrens: true,
        inputs: [
            {
                name: 'menus',
                type: 'list',
                defaultValue: [
                    {
                        menuItems: [
                            {
                                label: 'Tab title',
                                icon: 'uil:github',
                                content: []
                            }
                        ]
                    }
                ],
                subFields: [
                    {
                        name: 'menuItems',
                        type: 'list',
                        subFields: [
                            {
                                name: 'label',
                                type: 'string',
                                defaultValue: 'Salar'
                            },
                            {
                                name: 'icon',
                                type: 'string',
                                defaultValue: 'uil:github'
                            },
                            {
                                name: 'content',
                                type: 'uiBlocks',
                                defaultValue: []
                            }
                        ]
                    }
                ]
            }
        ]
    }
]