<script setup lang="ts">
import { Codemirror } from 'vue-codemirror'
import { basicSetup } from 'codemirror'
import { languages } from '@codemirror/language-data'
import { markdown, markdownLanguage } from '@codemirror/lang-markdown'
import { oneDark } from '@codemirror/theme-one-dark'
import { GFM } from '@lezer/markdown'

const extensions = [
  basicSetup,
  oneDark,
  markdown({
    base: markdownLanguage,
    codeLanguages: languages,
    extensions: [...GFM]
  })
]

</script>

<template>
    <codemirror class="TestEditor" :extensions="extensions" />
</template>

<style scoped>
.TestEditor {
  text-align: left;
}
</style>

<style>
.cm-editor {
  width: calc(100vw - 4rem);
  height: calc(100vh - 4rem);
}
</style>
