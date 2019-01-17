<template>
<div class="columns">
    <div class="column is-10">
        <div class="columns is-multiline">
            <template v-for="lesson in lessons">
                <div class="column is-narrow" v-for="entry in lesson.kanji">
                    <div class="box">
                        <a class="japanese-text kanji-display selected" v-on:click="selectedEntry = entry">{{ entry.Kanji }}</a>
                    </div>
                </div>
            </template>
        </div>
    </div>
    <div class="column is-2">
        
    </div>
</div>
</template>

<script>
export default {
    data: () => ({
        selectedEntry: null,
    }),
    props: {
        lessons: {
            type: Array,
        }
    },
}
</script>

<style>

</style>
