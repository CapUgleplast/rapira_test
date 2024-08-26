import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from 'vitest'
import TagFilters from "@/components/Blog/TagFilters.vue";

describe('TagFilters', () => {
    const model = [
        { label: 'Tag 1', active: false },
        { label: 'Tag 2', active: true },
        { label: 'Tag 3', active: false }
    ]

    let wrapper;
    let tags;

    beforeEach(()=> {
         wrapper = mount(TagFilters, {
            props: {
                modelValue: model
            }
        })
        tags = wrapper.findAll('[data-type="tag"]')
    })

    it('renders tags correctly', () => {
        expect(tags.length).toBe(model.length)
        tags.forEach((tag, index) => {
            expect(tag.text()).toContain(model[index].label)
        })
    })

    it('changes state on click', async () => {
        const tag = tags[0]
        const iconPlus = tag.find('[data-type="icon-plus"]')
        const iconCheck = tag.find('[data-type="icon-check"]')
        const iconCross = tag.find('[data-type="icon-cross"]')


        expect(model[0].active).toBe(false)
        expect(iconPlus.attributes('style')).toBe(undefined)
        expect(iconCheck.attributes('style')).toContain('display: none;')
        expect(iconCross.attributes('style')).toContain('display: none;')

        await tag.trigger('click')
        expect(model[0].active).toBe(true)
        expect(iconPlus.attributes('style')).toBe('display: none;')
        expect(iconCheck.attributes('style')).toContain('')
        expect(iconCross.attributes('style')).toContain('display: none;')

        await tag.trigger('mouseenter')
        expect(model[0].active).toBe(true)
        expect(iconPlus.attributes('style')).toBe('display: none;')
        expect(iconCheck.attributes('style')).toContain('display: none;')
        expect(iconCross.attributes('style')).toContain('')

        await tag.trigger('mouseleave')
        expect(model[0].active).toBe(true)
        expect(iconPlus.attributes('style')).toBe('display: none;')
        expect(iconCheck.attributes('style')).toContain('')
        expect(iconCross.attributes('style')).toContain('display: none;')


        await tag.trigger('click')
        expect(model[0].active).toBe(false)
        expect(iconPlus.attributes('style')).toBe('')
        expect(iconCheck.attributes('style')).toContain('display: none;')
        expect(iconCross.attributes('style')).toContain('display: none;')
    })


    it('updates hoveredTag on mouseenter and mouseleave', async () => {
        const tag = tags[0]

        await tag.trigger('mouseenter')
        expect(wrapper.vm.hoveredTag).toBe(model[0].label)

        await tag.trigger('mouseleave')
        expect(wrapper.vm.hoveredTag).toBe('')
    })
})