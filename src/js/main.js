window.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded Scripts");
});

function sidebar() {
  const breakpoint = 1280
  return {
      open: {
          above: true,
          below: false,
      },
      isAboveBreakpoint: window.innerWidth > breakpoint,

      handleResize() {
          this.isAboveBreakpoint = window.innerWidth > breakpoint
      },

      isOpen() {
          console.log(this.isAboveBreakpoint)
          if (this.isAboveBreakpoint) {
              return this.open.above
          }
          return this.open.below
      },
      handleOpen() {
          if (this.isAboveBreakpoint) {
              this.open.above = true
          }
          this.open.below = true
      },
      handleClose() {
          if (this.isAboveBreakpoint) {
              this.open.above = false
          }
          this.open.below = false
      },
      handleAway() {
          if (!this.isAboveBreakpoint) {
              this.open.below = false
          }
      },
  }
}
