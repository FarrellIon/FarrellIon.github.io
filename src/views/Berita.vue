<template>
  <Navbar :whitetheme="whitetheme" navbaron="berita"/>
  <Headline :categories="categoryleft" :headline="headline" style=""/>
  <CarouselBerita class="lg:block md:block sm:hidden xs:hidden hilang" :numOfElements=3 :carouselBerita="carouselBerita"/>
  <CarouselBerita class="lg:hidden md:hidden sm:block xs:block hilang" :numOfElements=1 :carouselBerita="carouselBerita"/>
  <ListBerita :listBerita="listBerita" class="hilang"/>
  <ScrollToTop />
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Headline from '@/components/ComponentBerita/Headline.vue';
import CarouselBerita from '@/components/ComponentBerita/CarouselBerita.vue';
import ListBerita from '@/components/ComponentBerita/ListBerita.vue';
import ScrollToTop from '@/components/ScrollToTop.vue';
import axios from 'axios';
export default {
    data(){
        return{
            whitetheme: true,
            categoryleft: [
                {id: 1, text: 'mangga dimakan'},
                {id: 2, text: 'test2'},
                {id: 3, text: 'test1'},
                {id: 4, text: 'test2'},
                {id: 5, text: 'test1'},
                {id: 6, text: 'test2'},
            ],
            headline: {title: 'Judul Berita abcd', description: 'Deskripsi berita abcacadabcabacba', image: require('@/assets/berita.png')},
            carouselBerita: [
                {id: 1, title: 'Judul Berita', image: require('@/assets/berita.png'), date: '05 Febuari 2022'},
                {id: 2, title: 'Judul Berita', image: require('@/assets/berita.png'), date: '05 Febuari 2022'},
                {id: 3, title: 'Judul Berita', image: require('@/assets/berita.png'), date: '05 Febuari 2022'},
                {id: 4, title: 'Judul Berita', image: require('@/assets/berita.png'), date: '05 Febuari 2022'},
                {id: 5, title: 'Judul Berita', image: require('@/assets/berita.png'), date: '05 Febuari 2022'},
            ],
            listBerita: [
                {id: 1, title: 'Judul Berita', description: 'Deskripsi Berita ddddddd ddd ddd dddd dddd dddd dd', image: require('@/assets/berita.png'), datetime: '05 Febuari 2022, 08:00 WIB', categories: ['testsdfsdfsdf1', 'test2', 'test3']},
                {id: 2, title: 'Judul Berita2', description: 'Deskripsi Berita', image: require('@/assets/berita.png'), datetime: '05 Febuari 2022, 08:00 WIB', categories: ['test1', 'tesdsdfst2']},
                {id: 3, title: 'Judul Berita3', description: 'Deskripsi Berita', image: require('@/assets/berita.png'), datetime: '05 Febuari 2022, 08:00 WIB', categories: ['tsdfdest1', 'test2', 'test3']},
            ],
        }
    },
    components: {
        Navbar,
        Headline,
        CarouselBerita,
        ListBerita,
        ScrollToTop,
    },
    methods: {
        scrollup(){
            window.scroll({
                top: 0,
                left: 0,
            })
        }
    },
    created(){
        axios.get(`berita`)
            .then(res => {
                this.headline = res.data.headline;
                this.categoryleft = res.data.category;
                this.listBerita = res.data.berita;
                this.carouselBerita = res.data.random;
            })
            .catch(err => {
                console.log(err.message)
            })
    },
    mounted(){
        this.scrollup()
    }
}
</script>

<style>
.hilangbeneran{
    display: none !important;
}
</style>