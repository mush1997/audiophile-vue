<script setup>
import { useTemplateRef } from 'vue'
const btn = useTemplateRef('btn')
defineExpose({ btn })
</script>

<template>
    <button class="mainBtn" ref="btn">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
button {
    margin-top: 40px;
    width: 160px;
    height: 48px;
    border: none;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.mainBtn {
    background-color: $primary;
    color: $white;
}

.blackBtn {
    background-color: $black;
    color: $white;
}

.hollowBtn {
    margin-top: 32px;
    border: 1px solid $black;
    background-color: transparent;
    color: $black;
}

@media screen and (hover: hover) {
    button:hover {
        cursor: pointer;
    }

    .mainBtn:hover {
        background-color: $light_primary;
    }

    .blackBtn:hover {
        background-color: $dark_gray;
    }

    .hollowBtn:hover {
        background-color: $black;
        color: $white;
    }
}
</style>