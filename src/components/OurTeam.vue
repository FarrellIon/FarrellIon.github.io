<template v-if="!!ourteamcontent && !!karyawan">
<div>
  <div class="w-full ourteambg relative lg:block xs:hidden h-screen p-10" v-for="item in karyawan" :key="item.id">
      <div class="absolute right-16 top-4">
          <div class="flex">
              <div>
                  <img class="w-48 h-48 rounded-full" :src="item.imagePC" alt="">
              </div>
              <div class="pt-4 pl-3">
                  <h1 class="font-bold text-2xl">{{item.namaPC}}</h1>
                  <p class="text-xl pb-4 border-b-2" style="border-color: rgba(0,0,0,0.2)">{{item.jabatanPC}}</p>
              </div>
          </div>
          <div class="absolute right-0 top-32">
              <h1 class="font-bold text-2xl text-center">{{item.namaCEO}}</h1>
              <p class="text-xl pb-4 text-center">{{item.jabatanCEO}}</p>
              <img class="w-48 h-48 m-auto rounded-full" :src="item.imageCEO" alt="">
          </div>
      </div>
      <div class="absolute left-16 bottom-4">
          <div class="absolute left-0 bottom-28">
              <img class="w-48 h-48 m-auto rounded-full" :src="item.imageHR" alt="">
              <h1 class="font-bold text-2xl text-center mt-4">{{item.namaHR}}</h1>
              <p class="text-xl pb-4 text-center">{{item.jabatanHR}}</p>
          </div>
          <div class="flex">
              <div class="pb-4 pr-3 self-end">
                  <h1 class="font-bold border-t-2 text-2xl text-right pt-4" style="border-color: rgba(0,0,0,0.2)">{{item.namaHN}}</h1>
                  <p class="text-xl text-right">{{item.jabatanHN}}</p>
              </div>
              <div>
                  <img class="w-48 h-48 rounded-full" :src="item.imageHN" alt="">
              </div>
          </div>
      </div>
      <div style="top: 48%" class="absolute left-2/4 -translate-x-2/4 -translate-y-2/4 w-full">
          <h1 style="transform: rotate(28deg)" class="text-white text-5xl font-bold text-center">Our Team</h1>
          <p style="transform: rotate(28deg)" class="text-white text-xl text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <router-link :to="{ name: 'OurTeam' }" href="#" class="font-bold text-white text-2xl absolute right-4 bottom-4">
        See More >
      </router-link>
  </div>
  <div class="w-full ourteambg relative lg:hidden xs:block" style="height: 700px">
    <carousel ref="carousel" :items-to-show="1" :items-to-scroll="1" class="md:pt-32 sm:pt-54 xs:pt-36" :wrap-around="true" :breakpoints="breakpoints" :autoplay="3000">
        <slide class="flex-col" v-for="member in ourteamcontent" :key="member.id">
            <img :src="member.image" alt="" class="md:w-4/12 sm:w-6/12 xs:w-6/12">
            <div style="background: rgba(0,0,0,0.5)" class="rounded-xl p-3">
                <h1 class="sm:text-4xl xs:text-2xl text-white font-bold text-center block border-b-2 border-slate-300">{{member.name}}</h1>
                <p class="sm:text-xl xs:text-lg text-white text-center block">{{member.division}}</p>
            </div>
        </slide>
    </carousel>
    <div class="absolute top-8 left-8 w-full">
        <h1 class="text-white md:text-5xl sm:text-3xl xs:text-2xl font-bold">Our Team</h1>
        <p class="text-white text-base md:w-full sm:w-1/2 xs:w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
      <router-link :to="{ name: 'OurTeam' }" href="#" class="font-bold text-white text-2xl absolute right-4 bottom-4">
        See More >
      </router-link>
  </div>
</div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
    props: ['karyawan', 'ourteamcontent'],
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
}
</script>

<style>
.ourteambg{
    background-image: url('@/assets/ourteambg.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
</style>