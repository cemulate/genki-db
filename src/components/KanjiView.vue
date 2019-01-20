<template>
<div class="columns">
    <div class="column is-10">
        <div class="columns is-multiline is-mobile">
            <template v-for="lesson in lessons">
                <div class="column is-narrow" v-for="entry in lesson.kanji">
                    <div class="box">
                        <a class="japanese-text kanji-display" v-on:click="selectedEntry = entry">{{ entry.Kanji }}</a>
                    </div>
                </div>
            </template>
        </div>
    </div>
    <div class="column is-2">
        <template v-if="selectedEntry != null">
            <a v-if="selectedEntry != null" id="selected-kanji-display" target="_blank" v-bind:href="`https://jisho.org/search/${ selectedEntry.Kanji }`">{{ selectedEntry.Kanji }}</a>
            <hr class="tight">
            <p><strong>Meaning</strong>: {{ selectedEntry.Definition }}</p>
            <hr class="tight">
            <p><strong>Reading</strong>: {{ selectedEntry.Reading }}</p>
            <hr class="tight">
            <p><strong>Examples</strong></p>
            <hr class="tight">
            <template v-for="entry in selectedEntry.Examples">
                <p>
                    <a class="japanese-text" target="_blank" v-bind:href="`https://jisho.org/search/${ entry.Example }`">{{ entry.Example }}</a><br>
                    <span class="japanese-text">{{ entry.Reading }}</span><br>
                    <span class="japanese-text">{{ entry.Definition }}</span>
                </p>
                <hr class="tight">
            </template>
        </template>
    </div>
</div>
</template>

<script>
import fitty from 'fitty';

export default {
    data: () => ({
        selectedEntry: null,
    }),
    props: {
        lessons: {
            type: Array,
        }
    },
    updated() {
        let span = document.getElementById('selected-kanji-display');
        if (span != null) fitty(span);
    },
}
</script>

<style lang="scss" scoped>
.kanji-display {
    font-size: 3.5em;
    line-height: 0.75;
    color: inherit;
}

#selected-kanji-display {
    display: inline-block;
    white-space: nowrap;
    line-height: 1;
}
</style>
