// 锁机制
export default {
  data() {
    return {
      btnLock1: false,
      btnLock2: false,
      btnLock3: false,
      btnLock4: false,
      btnLock5: false,
    }
  },
  methods: {
    closeBtn(i) {
      this['btnLock' + i] = true
    },
    openBtn(i) {
      this['btnLock' + i] = false
    },
  },
}