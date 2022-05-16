<template v-if="!!headline && !!categories">
  <div class="p-8 mb-12">
    <div class="flex flex-wrap justify-end">
        <div class="flex items-center self-start pb-8 md:w-1/3 xs:w-full">
            <input class="rounded-3xl border-2 xs:w-full md:w-full mr-2 bg-transparent focus:border-purple-600 focus:border-2 border-purple-600 px-4" v-model="data" @keyup.enter="findBerita" @keyup="checkInput" type="text" placeholder="Tekan enter untuk cari berita">
        </div>
    </div>
    
    <!-- kondisi untuk apakah sedang mencari atau tidak -->
    <div v-if="!isSearching">
        <h1 class="text-4xl font-bold pb-8 w-full">Berita Terkini</h1>
        <div class="lg:flex md:flex">
            <div class="sm:w-full md:w-4/6 lg:w-4/6 lg:mr-8 md:mr-8 mb-8 cursor-pointer"  @click="beritaDetails(headline.id, headline.image,headline.title, headline.datetime, headline.description, headline.slug)">
                <img class="m-auto" :src="headline.image" alt="">
                <div class="mt-4">
                    <h1 class="text-3xl font-bold text-center">{{headline.title}}</h1>
                    <span v-html="headline.description" class="text-center"></span>
                </div>
            </div>
            <div class="sm:w-full md:w-2/6 lg:w-2/6 border-purple-600 rounded-xl border-4 p-4">
                <h1 class="text-center text-2xl mb-8">Kategori</h1>
                <div class="flex flex-wrap justify-center">
                    <div class="lg:w-5/12 md:w-full sm:w-5/12 xs:w-full kategori mx-2 flex items-center justify-center hover:cursor-pointer" v-for="category in categories" :key="category.id" @click="findKategori(category.text)">
                        {{ category.text }}
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="p-8 mb-12" v-else>
        <h1 class="text-4xl font-bold mb-2" v-if="isKategori">Category: {{kategoriId}}</h1>
        <h1 class="text-4xl font-bold mb-2" v-if="isSearching && !isKategori">Search Results</h1>
        <div v-if="isKategori" class="flex overflow-scroll flex-wrap">
            <div @click="checkInput" class="kategoriclass border-2 rounded-full text-violet-600 hover:bg-violet-600 hover:text-white hover:cursor-pointer px-3 py-1 mx-1 mb-2">
                all
            </div>
            <div ref="kategori" :id="'kategori'+category.text" class="kategoriclass border-2 rounded-full text-violet-600 hover:bg-violet-600 hover:text-white hover:cursor-pointer px-3 py-1 mx-1 mb-2" v-for="category in categories" :key="category.id" @click="changeActive(category.id, category.text)">
                {{ category.text }}
            </div>
        </div>
        <div class="bgimage fixed opacity-50 bottom-0 left-0 w-full h-full -z-10"></div>
        
        <div v-if="isData">
            <div class="lg:flex md:flex w-full mb-8 cursor-pointer hover:bg-gray-200 p-4 transition-all duration-200" @click="beritaDetails(berita.id, berita.image,berita.title, berita.datetime, berita.description, berita.slug)" v-for="berita in listBerita" :key="berita.id">
                <div class="lg:w-5/12 md:w-6/12 lg:mr-16 md:mr-8 sm:w-full sm:mr-8 xs:w-full xs:mr-8 flex justify-center">
                    <img :src="berita.image" alt="">
                </div>
                <div class="lg:w-7/12 xs:mt-4 md:mt-0 md:w-6/12 sm:w-full xs:w-full">
                    <div class="flex">
                        <div class="kategori mx-1" v-for="category in berita.categories" :key="category.id">{{ category }}</div>
                    </div>
                    <div>
                        <p class="text-black lg:text-xl md:text-xl pb-2 sm:text-sm">{{berita.datetime}}</p>
                        <p class="text-black font-bold lg:text-3xl md:text-2xl sm:text-3xl xs:text-3xl pb-2">{{berita.title}}</p>
                        <div v-if="String(berita.description).length > 70">
                            <span v-html="berita.description.slice(0,70) + '...'" class="text-gray-700 lg:text-lg md:text-lg"></span>
                        </div>
                        <div v-else>
                            <span v-html="berita.description" class="text-gray-700 lg:text-lg md:text-lg"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div v-else>
            <p class="text-xl font-semibold mx-5">No Results</p>
        </div>
        
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const hilang = document.getElementsByClassName('hilang');

export default {
    data(){
        return{
            isSearching: false,
            data: '',
            listBerita: [],
            isKategori: false,
            kategoriId: '',
            isData: true
        }
    },
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    props: ['headline', 'categories'],
    methods: {
        beritaDetails(id,image, title, datetime, description, slug){
            this.$router.push({name: 'BeritaDetails', params: {id,slug, title, image, description, datetime}})
        },
        findBerita(){
            if(this.data != ""){
                this.isSearching = true;
                this.isKategori = false;
                this.listBerita = [];
                    
                for(var i = 0; i < hilang.length; i++){
                    hilang[i].classList.add('hilangbeneran')
                }
                
                axios.get(`get-berita/${this.data}`)
                    .then(res => {
                        this.listBerita = res.data
                        if(this.listBerita.length < 1){
                            this.isData = false
                            console.log('tidak ada data')
                        }else{
                            this.isData = true
                        }
                    })
                    .catch(err => {
                        console.log(err.message)
                    })
            }else{
                console.log("tidak ada input")
            }
        },
        checkInput(){
            if(!this.data){
                this.isSearching = false
                this.isKategori = false
                for(var i = 0; i < hilang.length; i++){
                    hilang[i].classList.remove('hilangbeneran')
                }
            }
        },
        findKategori(category){
            this.isSearching = true
            this.isKategori = true
            this.listBerita = []
            
            
            for(var i = 0; i < hilang.length; i++){
                hilang[i].classList.add('hilangbeneran')
            }
            
            axios.get(`kategori-berita/${category}`)
                .then(res => {
                    this.kategoriId = category
                    this.listBerita = res.data
                    console.log(this.listBerita)
                    this.giveActive()
                })
                .catch(err => {
                    console.log(err.message)
                })
        },
        changeActive(index, kategori){
            this.findKategori(kategori)
            for(let x=0; x<this.$refs.kategori.length; x++){
                this.$refs.kategori[x].classList.remove('kategoriaktif');
            }
            this.$refs.kategori[index].classList.add('kategoriaktif')
        },
        giveActive(){
            this.$nextTick(()=> {
                document.getElementById(`kategori${this.kategoriId}`).classList.add('kategoriaktif');
                console.log(this.kategoriId);
            })
        },
    }
}
</script>

<style scoped>
.kategori{
    background: linear-gradient(240deg, #C56FE1 0%, #CB81F2 15%, #8F41F1 100%);
    border-radius: 6px;
    color: white;
    padding: 6px 12px;
    margin-bottom: 24px;
    text-align: center;
}

.kategoriclass{
    border-color: rgb(124, 58, 237);
}

.kategoriaktif{
    background: rgb(124, 58, 237);
    color: white;
}

::-webkit-scrollbar-track{
    background: transparent;
}
::-webkit-scrollbar-corner{
    background: transparent;
}
</style>