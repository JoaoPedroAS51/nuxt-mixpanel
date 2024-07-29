<template>
  <div>
    Nuxt module playground!
  </div>
</template>

<script setup lang="ts">
import { useMixpanel } from '#imports'

const mixpanel = useMixpanel()
mixpanel.track('test')
</script>
