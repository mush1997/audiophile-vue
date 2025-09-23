<script setup>
const { product } = defineProps(['product'])
</script>

<template>
    <section class="details">
        <div class="feature">
            <h2>Features</h2>
            <p v-html="product.features.replaceAll('\n', '<br>')"></p>
        </div>
        <div class="others">
            <h2>In the box</h2>
            <ul>
                <template v-for="item in product.includes" :key="item.item">
                    <li><span>{{ item.quantity }}x</span><span>{{ item.item }}</span></li>
                </template>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.details {
    display: flex;

    h2 {
        margin-bottom: 32px;
        font-size: 32px;
        line-height: 36px;
        letter-spacing: 1.15px;
    }
}

.feature {
    flex-basis: 55%;
    margin-right: 125px;

    p {
        opacity: 0.5;
    }
}

.others ul li {
    margin-bottom: 4px;
    list-style: none;

    span:first-child {
        width: 40px;
        display: inline-block;
        font-weight: bold;
        color: $primary;
    }

    span:nth-child(2) {
        opacity: 0.5;
    }
}

@media screen and (max-width:1024px) {
    .details {
        flex-wrap: wrap;
    }

    .feature {
        flex-basis: 100%;
        margin: 0 0 120px 0;
    }

    .others {
        flex-basis: 100%;
        display: flex;

        h2 {
            flex-basis: 60%;
        }
    }
}

@media screen and (max-width:700px) {
    .others {
        h2 {
            flex-basis: 45%;
            margin-right: 24px;
        }

        ul li {
            span:first-child {
                width: 32px;
            }
        }
    }
}

@media screen and (max-width:500px) {
    .details {
        h2 {
            margin-bottom: 24px;
            font-size: 24px;
        }
    }

    .feature {
        margin-bottom: 90px;
    }

    .others {
        flex-wrap: wrap;

        h2 {
            flex-basis: 100%;
            margin-right: 0;
        }

        ul {
            flex-basis: 100%;

            li {
                margin-bottom: 8px;
            }
        }
    }
}
</style>