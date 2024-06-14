import Accordion from "../components/Accordion/index.vue";
import Button from "../components/Button/index.vue";
import Tabs from "../components/Tabs/index.vue";
import TabsHorizontal from "../components/Tabs/Horizontal/index.vue";

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