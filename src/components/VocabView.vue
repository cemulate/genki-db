<template>
<table class="table">
    <thead>
        <tr>
            <th>Kana</th>
            <th>Kanji</th>
            <th>Meaning</th>
        </tr>
    </thead>
    <tbody>
        <template v-for="lesson in lessons">
            <tr v-for="entry in lesson.vocab">
                <td>{{ entry.Kana }}</td>
                <td>{{ entry.Kanji }}</td>
                <td>{{ entry.Meaning }}</td>
            </tr>
        </template>
    </tbody>
</table>
</template>

<script>
export default {
    data: () => ({

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
