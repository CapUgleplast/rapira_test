import { mount } from "@vue/test-utils";
import BlogHeader from "@/components/Blog/BlogHeader.vue";
import {useBlogStore} from "@/stores/blog";
import Search from '@/components/Blog/Search.vue'
import Filters from '@/components/Blog/TagFilters.vue'


vi.mock('@/stores/blog', () => ({
    useBlogStore: vi.fn()
}))

describe('BlogHeader.vue', () => {
    const mockFetchTags = vi.fn()
    const mockClearAllFilters = vi.fn()
    const mockChangeSearchFilter = vi.fn()
    const mockGetTags = vi.fn().mockReturnValue([])

    beforeEach(() => {
        useBlogStore.mockReturnValue({
            fetchTags: mockFetchTags,
            clearAllFilters: mockClearAllFilters,
            changeSearchFilter: mockChangeSearchFilter,
            getTags: mockGetTags,
            getFiltered: false,
            getSearch: ''
        })
    })

    it('renders correctly', () => {
        const wrapper = mount(BlogHeader)
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.find('.title').text()).toBe('Блог')
    })

    it('calls fetchTags on mount', () => {
        mount(BlogHeader)
        expect(mockFetchTags).toHaveBeenCalled()
    })

    it('hides tags filter when filter button is clicked', async () => {
        const wrapper = mount(BlogHeader)
        const filterButton = wrapper.find('[data-type="filter-toggle"]')
        expect(wrapper.find('.filters').attributes('style')).toBe(undefined)

        await filterButton.trigger('click')
        expect(wrapper.find('.filters').attributes('style')).toContain("display: none;")

        await filterButton.trigger('click')
        expect(wrapper.find('.filters').attributes('style')).toContain('')
    })
})
