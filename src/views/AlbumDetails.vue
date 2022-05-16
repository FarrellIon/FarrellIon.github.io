<template>
  <Navbar :whitetheme="whitetheme" navbaron="album"/>
  <AlbumDetail :albumItems="albumItems" :title="albumTitle" :description="albumDescription" style="padding-top: 100px;"/>
  <ScrollToTop />
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import AlbumDetail from '@/components/ComponentAlbum/AlbumDetail.vue';
import ScrollToTop from '@/components/ScrollToTop.vue';

export default {
  data(){
    return{
      whitetheme: true,
      albumItems: [],
      albumDescription: '',
      albumTitle: ''
    }
  },
  components:{
    Navbar,
    AlbumDetail,
    ScrollToTop,
  },
  methods: {
    getParams(){
      this.albumItems = JSON.parse(this.$route.params.albumItems)
      this.albumDescription = this.$route.params.description
      this.albumTitle = this.$route.params.albumTitle
    },
    scrollup(){
        window.scroll({
            top: 0,
            left: 0,
        })
    }
  },
  created(){
    this.getParams()
  },
  mounted(){
      this.scrollup()
  }
}
</script>

<style>

</style>