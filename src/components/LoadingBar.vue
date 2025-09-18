<script setup></script>

<template>
    <div class="loading">
        <p>Loading...</p>
    </div>
</template>

<style scoped lang="scss">
@keyframes load {
    0% {
        opacity: 0.2;
    }

    25% {
        opacity: 0.4;
    }

    50% {
        opacity: 0.6;
    }

    75% {
        opacity: 0.8;
    }

    100% {
        opacity: 1;
    }
}

.loading {
    display: flex;
    justify-content: center;
    animation: load 3s infinite;

    p {
        font-size: 40px;
        font-weight: bold;
        line-height: 44px;
        letter-spacing: 2px;
        color: $gray;
    }
}
</style>