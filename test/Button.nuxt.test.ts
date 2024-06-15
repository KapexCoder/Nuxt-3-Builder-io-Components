// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'

import { mount } from "@vue/test-utils";
import Button from "../components/Button/index.vue";

describe("Button", () => {
    it("Button renders properly", () => {
        const wrapper = mount(Button, {slots: {default: "Button"}});
        expect(wrapper.html()).toContain("Button");
    })
})