<template>
  <Navbar :whitetheme="whitetheme" navbaron="berita"/>
  <BeritaDetail :beritaLain="beritaLain" :berita="berita"/>
  <ScrollToTop />
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import BeritaDetail from '@/components/ComponentBerita/BeritaDetail.vue';
import ScrollToTop from '@/components/ScrollToTop.vue';
import axios from 'axios';

export default {
  data(){
    return{
      whitetheme: true,
      berita: {},
      beritaLain: []
    }
  },
  components:{
    Navbar,
    BeritaDetail,
    ScrollToTop,
  },
  methods: {
    getParams(){
      this.berita = {
        id: this.$route.params.id,
        title: this.$route.params.title,
        image: this.$route.params.image,
        description: this.$route.params.description,
        slug: this.$route.params.slug,
        datetime: this.$route.params.datetime,
      }
    },
    getBeritaLain(){
      axios.get(`berita`)
        .then(res => {
          this.beritaLain = res.data.random
        })
    },
    updateViews(){
      axios.put(`berita/${this.berita.id}`)
      .catch(err => {
          console.log(err.message)
        })
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
    this.getBeritaLain()
  },
  mounted(){
    this.scrollup()
  },
  updated(){
    this.updateViews()
  }
}
</script>

<style>

</style>