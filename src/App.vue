<script setup>
import BasicLayout from '@/components/layout/BasicLayout.vue'
import LoadingBar from '@/components/shared/LoadingBar.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'

onMounted(() => {
  AOS.init()
})
</script>

<template>
  <Suspense>
    <template #default>
      <BasicLayout />
    </template>
    <template #fallback>
      <LoadingBar />
    </template>
  </Suspense>
</template>

<style lang="scss" src="@/styles/shared-setting.scss"></style>

<style scoped>
.loading {
  height: 100vh;
}

.loading :deep(p) {
  font-size: 48px;
  line-height: 48px;
}
</style>