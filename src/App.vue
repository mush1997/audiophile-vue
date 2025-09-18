<script setup>

</script>

<template>
  <div class="shadow"></div>
  <router-view />
</template>

<style lang="scss" src="@/styles/shared-setting.scss">
body {
  background-color: $main_bg;
}

@keyframes menuShadow {
  from {
    opacity: 0;
  }

  to {
    opacity: 0.5;
  }
}

@keyframes cartShadow {
  from {
    opacity: 0;
  }

  to {
    opacity: 0.5;
  }
}

@keyframes alertShadow {
  from {
    opacity: 0;
  }

  to {
    opacity: 0.8;
  }
}

.shadow {
  content: '';
  width: 100%;
  height: 100vh;
  background-color: $gray;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  visibility: hidden;
}

body.menuShadow {
  .shadow {
    visibility: visible;
    animation: menuShadow 0.6s forwards;
  }
}

body.cartShadow {
  .shadow {
    visibility: visible;
    animation: cartShadow 0.6s forwards;
  }
}

body.alertShadow {
  .shadow {
    visibility: visible;
    animation: alertShadow 0.4s forwards;
    z-index: 15;
  }

  .popup {
    visibility: visible;
    animation: showing 0.4s forwards;
  }
}
</style>