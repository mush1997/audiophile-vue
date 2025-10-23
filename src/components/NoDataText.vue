<template>
    <div class="text">
        <div>
            <slot name="firstLine"></slot>
            <slot name="secondLine"></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.text {
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;

    :slotted(p) {
        font-size: 28px;
        font-weight: bold;
        line-height: 44px;
        letter-spacing: 1px;
        word-spacing: 2px;
        color: $gray;
    }

    :slotted(p):first-child {
        margin-bottom: 16px;
    }
}

@media screen and (max-width:1024px) {
    .text :slotted(p) {
        font-size: 22px;
        line-height: 32px;
    }
}

@media screen and (max-width:500px) {
    .text {
        margin-bottom: -60px;
        height: 150px;

        :slotted(p) {
            font-size: 18px;
            font-weight: 500;
            line-height: 24px;
            letter-spacing: 0.5px;
        }
    }
}
</style>