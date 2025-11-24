<template>
    <aside>
        <picture>
            <source srcset="@/assets/shared/desktop/image-best-gear.jpg" media="(min-width: 1025px)">
            <source srcset="@/assets/shared/tablet/image-best-gear.jpg" media="(min-width: 501px)">
            <img src="@/assets/shared/mobile/image-best-gear.jpg" alt="best-gear">
        </picture>
        <div>
            <p>Bringing you the <span>best</span> audio gear</p>
            <p>
                Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration
                rooms available for you to browse and experience a wide range of our products. Stop by our store
                to meet some of the fantastic people who make Audiophile the best place to buy your portable
                audio equipment.
            </p>
        </div>
    </aside>
</template>

<style lang="scss" scoped>
aside {
    margin: 160px 0;
    padding: 0 11%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    picture {
        flex-basis: 48%;
        min-width: 0;
        order: 1;

        img {
            width: 100%;
            border-radius: 10px;
            display: block;
        }
    }

    div {
        flex-basis: 48%;
        padding-right: 2%;

        p:nth-child(1) {
            margin-bottom: 32px;
            font-size: 40px;
            font-weight: bold;
            line-height: 44px;
            letter-spacing: 1.5px;
            text-transform: uppercase;

            span {
                font-size: 40px;
                font-weight: bold;
                line-height: 44px;
                color: $primary;
                letter-spacing: 1.5px;
            }
        }

        p:nth-child(2) {
            opacity: 0.5;
        }
    }
}

@media screen and (min-width:1200px) {
    aside picture {
        max-width: 640px;
    }
}

@media screen and (max-width:1024px) {
    aside {
        margin: 120px 0;
        padding: 0 40px;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;

        picture {
            flex-basis: 100%;
            order: 0;
        }

        div {
            flex-basis: 100%;
            padding: 60px 60px 0 60px;
            text-align: center;
        }
    }
}

@media screen and (max-width:620px) {
    aside div {
        padding: 60px 24px 0 24px;
    }
}

@media screen and (max-width:500px) {
    aside {
        padding: 0 24px;

        div {
            padding: 40px 24px 0 24px;
        }
    }
}
</style>