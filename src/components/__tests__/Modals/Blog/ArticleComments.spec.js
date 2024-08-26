import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import ArticleComments from "@/components/Modals/Blog/ArticleComments.vue";

describe('ArticleComments.vue', () => {
    const model = [
        { name: 'User 1', content: 'Test comment 1', img: 'path/to/image1.jpg', created_at: '2024-08-26' },
        { name: 'User 2', content: 'Test comment 2', img: 'path/to/image2.jpg', created_at: '2024-08-26' }
    ]

    let wrapper;

    beforeEach(() => {
        wrapper = mount(ArticleComments, {
            props: {
                modelValue: model
            }
        })
    })

    it('renders the component correctly with comments', () => {
        const comments = wrapper.findAll('[data-type="comment"]')
        expect(comments.length).toBe(model.length)

        comments.forEach((comment, index) => {
            expect(comment.text()).toContain(model[index].name)
            expect(comment.text()).toContain(model[index].content)
        })
    })

    it('updates textarea focus state correctly', async () => {
        const textarea = wrapper.find('textarea')
        expect(wrapper.vm.textareaFocus).toBe(false)

        await textarea.trigger('focus')
        expect(wrapper.vm.textareaFocus).toBe(true)

        await textarea.trigger('blur')
        expect(wrapper.vm.textareaFocus).toBe(false)
    })

    it('displays the character count correctly', async () => {
        const textarea = wrapper.find('textarea')
        await textarea.setValue('Test')

        const characterCount = wrapper.find('[data-type="chars-count"]').text()
        expect(characterCount).toBe('4')
    })

    it('errors input if comment exceeds maxLength', async () => {
        const textarea = wrapper.find('textarea')
        const longText = 'a'.repeat(251)
        await textarea.setValue(longText)

        const publishButton = wrapper.find('[data-type="publish"]')
        expect(wrapper.vm.checkCommentLength).toBeGreaterThan(250)
        expect(publishButton.attributes('disabled')).toBe('')
        expect(textarea.attributes('class')).toContain('--error')
    })

    it('sends a comment and clears the textarea', async () => {
        const emitSpy = vi.spyOn(wrapper.vm, 'emit')

        const textarea = wrapper.find('textarea')
        await textarea.setValue('New Comment')

        const publishButton = wrapper.find('[data-type="publish"]')
        await publishButton.trigger('click')

        expect(wrapper.emitted().send).toBeTruthy()
        expect(wrapper.emitted().send).toEqual([['New Comment']])
        expect(wrapper.vm.commentValue).toBe('')
    })

    it('clears the textarea on cancel button click', async () => {
        const textarea = wrapper.find('textarea')
        await textarea.setValue('New comment')

        const cancelButton = wrapper.find('[data-type="cancel"]')
        await cancelButton.trigger('click')

        expect(wrapper.vm.commentValue).toBe('')
        expect(wrapper.vm.textareaFocus).toBe(false)

    })

    it('clears the textarea on clear icon click', async () => {
        const textarea = wrapper.find('textarea')
        await textarea.setValue('Some comment')

        const clearButton = wrapper.find('[data-type="clear"]')
        await clearButton.trigger('click')

        expect(wrapper.vm.commentValue).toBe('')
    })
})