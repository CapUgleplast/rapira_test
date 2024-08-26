import {defineStore} from "pinia";


export const useLayoutStore = defineStore('layout', {
  state: () => ({
      modalState: '',
  }),
  getters: {
      getModalState: (state) => state.modalState
  },
  actions: {
      setModalState(value: string): void {
          this.modalState = value;
      }
  }
});
