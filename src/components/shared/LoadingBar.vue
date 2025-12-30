<template>
    <div class="loading">
        <p>Loading...</p>
    </div>
</template>

<style lang="scss" scoped>
.loading {
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: load 2s infinite;

    p {
        font-size: 40px;
        font-weight: bold;
        line-height: 44px;
        letter-spacing: 2px;
        color: $gray;
    }
}

@media screen and (max-width:500px) {
    .loading {
        height: 150px;
    }
}

@keyframes load {
    from {
        opacity: 0.2;
    }

    to {
        opacity: 1;
    }
}
</style>