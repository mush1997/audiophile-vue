<template>
    <section>
        <div class="text">
            <p>
                Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers
                and sound specialists who are devoted to helping you get the most out of personal audio. Come and
                visit our demo facility - we’re open 7 days a week.
            </p>
            <p class="copyright">Copyright 2025. All Rights Reserved</p>
        </div>
        <div class="sns">
            <img src="@/assets/shared/desktop/icon-facebook.svg" alt="facebook">
            <img src="@/assets/shared/desktop/icon-twitter.svg" alt="twitter">
            <img src="@/assets/shared/desktop/icon-instagram.svg" alt="instagram">
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    margin: 36px 0 32px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .text {
        flex-basis: 42%;

        p {
            color: $white;
            opacity: 0.5;
        }

        .copyright {
            margin-top: 56px;
            font-weight: bold;
        }
    }

    .sns {
        img {
            margin-left: 16px;
            vertical-align: middle;
        }

        img:nth-child(1) {
            margin-left: 0;
        }
    }
}

@media screen and (hover:hover) {
    .sns img:hover {
        cursor: pointer;
        filter: invert(46%) sepia(96%) saturate(312%) hue-rotate(338deg) brightness(99%) contrast(92%);
    }
}

@media screen and (max-width:1024px) {
    section {
        display: block;
        position: relative;

        .text {
            .copyright {
                margin-top: 80px;
            }
        }

        .sns {
            position: absolute;
            right: 0;
            bottom: 0;
        }
    }
}

@media screen and (max-width:500px) {
    section {
        text-align: center;

        .sns {
            margin-top: 48px;
            position: static;
        }
    }
}
</style>