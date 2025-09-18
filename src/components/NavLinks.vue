<template>
    <ul class="navLinks">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/category/headphones">Headphones</router-link></li>
        <li><router-link to="/category/speakers">Speakers</router-link></li>
        <li><router-link to="/category/earphones">Earphones</router-link></li>
    </ul>
</template>

<style lang="scss" scoped>
.navLinks {
    li {
        margin-left: 34px;
        display: inline-block;
        list-style: none;

        a {
            display: block;
            font-size: 13px;
            font-weight: bold;
            line-height: 25px;
            color: $white;
            letter-spacing: 2px;
            text-decoration: none;
            text-transform: uppercase;
        }
    }

    li:nth-child(1) {
        margin-left: 0;
    }
}

@media screen and (hover: hover) {
    .navLinks {
        li {
            &:hover {
                cursor: pointer;
                color: $primary;
            }

            a:hover {
                color: $primary;
            }
        }
    }
}
</style>