<template v-if="!!listAlbum">
  <div class="p-8">
    <div class="flex flex-wrap md:justify-between xs:justify-center">
        <h1 class="text-4xl font-bold pb-8 md:w-1/2 xs:w-full">List Album</h1>
        <div class="flex items-center self-start pb-8 xs:w-5/6 md:w-1/2">
            <input class="rounded-3xl border-2 mr-2 bg-transparent focus:border-purple-600 focus:border-2 border-purple-600 px-4" type="text" v-model="data" placeholder="Search Album">
        </div>
    </div>
    <div class="bgimage fixed opacity-50 bottom-0 left-0 w-full h-full -z-10"></div>
    <div class="flex flex-wrap">
        <div v-for="album in listAlbum" :key="album.id" class="px-8 lg:w-1/3 md:w-1/2 xs:w-full sm:mb-12 xs:mb-12" @click="albumDetails(album.title, album.album_media, album.description)">
            <p class="text-center text-xl font-bold">{{album.title}}</p>
            <img class="m-auto" :src="album.image" alt="">
            <p class="text-center text-lg">{{album.date}}</p>
        </div>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
    props: ['listAlbum', 'data'],
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data(){
        return {
            albumItems: [],
            data: ''
        }   
    },
    methods: {
        albumDetails(title, dataAlbum, description){
            dataAlbum.forEach(data => {
                this.albumItems.push(data)
            })
            if(this.albumItems){
                this.$router.push({name: 'AlbumDetails', params: { title, albumItems: JSON.stringify(this.albumItems), description }})
            }
        }
    }
}
</script>

<style scoped>
.bgimage{
    background-image: url('@/assets/beritabg.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
}
.kategori{
    background: linear-gradient(240deg, #C56FE1 0%, #CB81F2 15%, #8F41F1 100%);
    border-radius: 12px;
    color: white;
    padding: 4px 12px;
    height: 40px;
    margin: 0 12px 24px 0;
    text-align: center;
}
</style>