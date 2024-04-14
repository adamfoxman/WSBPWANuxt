<template>
    <div class="first-row">
        <div class="logo">
            <nuxt-link to="/">
                <img src="/img/logo.png" alt="logo" height="150px" width="300px" />
            </nuxt-link>
        </div>
        <div class="buttons">
            <span class="icon">
                <i class="uil uil-shopping-cart-alt"></i>
            </span>
            <span class="icon">
                <i class="uil uil-user"></i>
            </span>
        </div>
    </div>
    <div style="background-color: #000; height: 2px; width: 100%;"></div>
</template>

<script lang="ts">

</script>

<style lang="scss">
.header-first-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 150px;
    max-width: 1000px;
}

.logo {
    display: flex;
    align-items: center;
    padding-left: 20px;

    img {
        width: 250px;
    }
}

.buttons {
    display: flex;
    align-items: center;
    padding-right: 20px;
}
</style>