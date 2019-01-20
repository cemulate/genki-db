<template>
<div id="root">
<the-navbar v-bind:selected-page="mode" v-on:select-page="selectMode"></the-navbar>
<section class="section">
<div class="container is-fluid">
    <div class="columns">
        <div class="column is-2">
            <aside class="menu">
                <p class="menu-label">Filter {{ this.mode }} by Lesson</p>
                <ul class="menu-list">
                    <li><a v-on:click="toggleAllNone()">{{ activeLessons.length == 0 ? 'All' : 'None' }}</a></li>
                    <li v-for="lesson in lessons">
                        <a v-on:click="toggleLesson(lesson)">
                            <font-awesome-icon v-bind:icon="lesson.active ? 'check-square' : 'square'" style="opacity: 0.4"/>
                            Lesson {{ lesson.number }}
                        </a>
                    </li>
                </ul>
            </aside>
        </div>
        <div class="column is-10">
            <vocab-view v-if="mode == 'vocab'" v-bind:lessons="activeLessons"></vocab-view>
            <kanji-view v-if="mode == 'kanji'" v-bind:lessons="activeLessons"></kanji-view>
        </div>
    </div>
</div>
</section>
</div>
</template>

<script>
import TheNavbar from './TheNavbar.vue';
import VocabView from './VocabView.vue';
import KanjiView from './KanjiView.vue';

import vocab from '../assets/vocab.json';
import kanji from '../assets/kanji.json';

const lessonNumbers = Array.from(new Set(vocab.map(x => x.Lesson))).sort((a, b) => a - b);
const lessons = lessonNumbers.map(n => ({
    number: n,
    active: true,
    vocab: vocab.filter(v => v.Lesson == n),
    kanji: kanji.filter(k => k.Lesson == n),
}));

export default {
    data: () => ({
        displayNavbarMenu: false,
        lessons,
        mode: 'vocab',
    }),
    computed: {
        activeLessons() {
            return this.lessons.filter(x => x.active);
        },
    },
    methods: {
        toggleLesson(lesson) {
            lesson.active = !lesson.active;
        },
        toggleAllNone() {
            if (this.lessons.some(x => x.active)) {
                this.lessons.forEach(lesson => lesson.active = false);
            } else {
                this.lessons.forEach(lesson => lesson.active = true);
            }
        },
        selectMode(mode) {
            this.mode = mode;
        },
    },
    components: {
        TheNavbar,
        VocabView,
        KanjiView,
    },
};
</script>

<style>

</style>
