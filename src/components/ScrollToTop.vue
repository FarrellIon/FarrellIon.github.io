<template>
  <div title="Scroll to Top">
    <div class="fixed bottom-4 right-4 hover:cursor-pointer w-12 h-12 rounded-2xl" style="background: linear-gradient(240deg, #C56FE1 0%, #CB81F2 15%, #8F41F1 100%)" @click="scrollToTop()">
      <img class="rotate-90 w-full h-full" src="@/assets/arrow.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        scrollToTop(){
            window.scrollTo(0, 0)
        }
    }
}
</script>

<style>

</style>