import Search from "@/components/Blog/Search.vue";
import { mount } from "@vue/test-utils";



describe('Search.vue', () => {
    it('renders correctly', () => {
        const wrapper = mount(Search)
        expect(wrapper.find('.search.container').exists()).toBe(true)
        expect(wrapper.find('[data-type="search"]').exists()).toBe(true)
    })

    it('updates value on input', async () => {
        const wrapper = mount(Search)
        const input = wrapper.find('[data-type="search"]')

        await input.setValue('test search')
        expect(wrapper.vm.value).toBe('test search')
    })

    it('emits "change" event on Enter press', async () => {
        const wrapper = mount(Search)
        const input = wrapper.find('[data-type="search"]')

        await input.setValue('test search')
        await input.trigger('keydown.enter')

        expect(wrapper.emitted().change).toBeTruthy()
        expect(wrapper.emitted().change[0]).toEqual(['test search'])
    })

    it('clears value and emits "clear" event on clear button click', async () => {
        const wrapper = mount(Search)
        const input = wrapper.find('[data-type="search"]')

        await input.setValue('test search')
        expect(wrapper.vm.value).toBe('test search')

        const clearButton = wrapper.find('[data-type="reset"]')
        await clearButton.trigger('click')

        expect(wrapper.vm.value).toBe('')
        expect(wrapper.emitted().clear).toBeTruthy()
        expect(wrapper.emitted().clear[0]).toEqual([''])
    })

    it('automatically clears value and emits "clear" event when input is manually cleared', async () => {
        const wrapper = mount(Search)
        const input = wrapper.find('[data-type="search"]')

        await input.setValue('test search')
        await input.setValue('') // Очистка вручную

        expect(wrapper.vm.value).toBe('')
        expect(wrapper.emitted().clear).toBeTruthy()
        expect(wrapper.emitted().clear[0]).toEqual([''])
    })

    it('does not show clear button when value is empty', async () => {
        const wrapper = mount(Search)
        const input = wrapper.find('[data-type="search"]')

        await input.setValue('')
        expect(wrapper.find('button').exists()).toBe(false)

        await input.setValue('test search')
        expect(wrapper.find('button').exists()).toBe(true)
    })
})