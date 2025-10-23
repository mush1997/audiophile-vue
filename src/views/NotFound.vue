<template>
    <main>
        <div>
            <h1>Oops! We cannot find the page you required.</h1>
            <p>Please click <router-link to="/">here</router-link> to homepage or check our products below!</p>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    margin-top: 160px;
    display: flex;
    justify-content: center;

    h1 {
        margin-bottom: 36px;
        font-size: 44px;
        line-height: 52px;
        letter-spacing: 0.5px;
        word-spacing: 3px;
        color: $gray;
        text-transform: none;
    }

    p,
    a {
        font-size: 22px;
        line-height: 36px;
        letter-spacing: 0.5px;
        word-spacing: 2px;
        color: $gray;
    }

    a {
        font-weight: 600;
    }
}

@media screen and (hover: hover) {
    a:hover {
        color: $primary;
    }
}

@media screen and (max-width:1024px) {
    main {
        margin-top: 120px;

        h1 {
            font-size: 32px;
            line-height: 40px;
        }

        p,
        a {
            font-size: 20px;
            line-height: 32px;
        }
    }
}

@media screen and (max-width:500px) {
    main {
        margin-top: 90px;

        h1 {
            font-size: 28px;
            line-height: 36px;
        }

        p,
        a {
            font-size: 18px;
            line-height: 26px;
        }
    }
}
</style>