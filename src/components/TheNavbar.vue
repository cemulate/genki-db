<template>
<nav class="navbar">
    <div class="navbar-brand">
        <a class="navbar-item"><strong>Genki Vocab</strong></a>
        <a role="button" class="navbar-burger" v-on:click="displayNavbarMenu = !displayNavbarMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
    </div>
    <div class="navbar-menu" v-bind:class="{ 'is-active': displayNavbarMenu }">
        <div class="navbar-start">
            <a class="navbar-item" v-on:click="$emit('select-page', 'vocab')">Vocab</a>
            <a class="navbar-item" v-on:click="$emit('select-page', 'kanji')">Kanji</a>
        </div>
        <div class="navbar-end">
            <a class="navbar-item" target="_blank" href="https://github.com/cemulate/genki-vocab">View on Github</a>
        </div>
    </div>
</nav>
</template>

<script>
export default {
    data: () => ({
        displayNavbarMenu: false,
    }),
    props: {
        selectedPage: {
            type: String,
            default: 'vocab',
        },
    },
}
</script>

<style>

</style>
