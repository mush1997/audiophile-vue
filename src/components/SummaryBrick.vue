<script setup>
import SummaryBrickLeftPart from '@/components/SummaryBrickLeftPart.vue'
import SummaryBrickRightPart from '@/components/SummaryBrickRightPart.vue'
</script>

<template>
    <div class="summaryBrick">
        <SummaryBrickLeftPart />
        <SummaryBrickRightPart />
    </div>
</template>

<style lang="scss" scoped>
.summaryBrick {
    width: 100%;
    border-radius: 10px;
    display: flex;
}

@media screen and (max-width:680px) {
    .summaryBrick {
        flex-wrap: wrap;
    }
}
</style>