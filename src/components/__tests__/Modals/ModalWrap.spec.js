import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import ModalWrap from "@/components/Modals/ModalWrap.vue";
import { useLayoutStore } from '@/stores/layout';

vi.mock('@/stores/layout', () => ({
    useLayoutStore: () => ({
        getModalState: 'testModal',
        setModalState: vi.fn(),
    }),
}))

describe('ModalWrap.vue', () => {

    let wrapper;

    beforeEach(()=> {

    })

    it('renders the modal when store modal state matches the name prop', () => {
        wrapper = mount(ModalWrap, {
            props: {
                name: 'testModal'
            },
            slots: {
                default: ()=> `slot`
            },
            global: {
                stubs: {
                    teleport: true
                }
            }
        })

        const modal = wrapper.find('.modal')

        expect(wrapper.vm.props.name === useLayoutStore().getModalState).toBe(true)
        expect(modal.exists()).toBe(true)
    })

    it('does not renders the modal when store modal state not matches the name prop', () => {
        wrapper = mount(ModalWrap, {
            props: {
                name: 'testModal1'
            },
            slots: {
                default: ()=> `slot`
            },
            global: {
                stubs: {
                    teleport: true
                }
            }
        })

        const modal = wrapper.find('.modal')

        expect(wrapper.vm.props.name === useLayoutStore().getModalState).toBe(false)
        expect(modal.exists()).toBe(false)
    })
})