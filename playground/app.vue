<template>
  <div>
    Nuxt module playground!
  </div>
</template>

<script setup lang="ts">
import { useMixpanel } from '#imports'

const mixpanel = useMixpanel()
console.log(mixpanel)
console.log(mixpanel.track('test'))
</script>
