<template v-if="!!kontak">
<footer id="footer" class="bg-gray-100 text-center lg:text-left">
  <div class="p-6 text-gray-800">
    <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-4 md:gap-0">
      <div class="mb-6 md:mb-0">
          <center>
            <img :src="kontak.foto" class="h-32 md:h-full md:p-12 sm:h-full sm:p-8 xs:h-32" alt="Logo KSD" />
          </center>
      </div>
      <div class="mb-6 md:mb-16 xs:flex xs:flex-wrap sm:block">
          <h5 class="font-medium mb-2 uppercase md:text-xl xs:pr-1 xs:text-base xs:w-1/3 xs:flex xs:items-center xs:text-left sm:text-center sm:w-full"><p>Contact Us</p></h5>
          <div class="flex flex-wrap items-center sm:w-full m-auto xs:w-2/3">
            <div class="flex justify-start w-full mb-2">
              <img src="@/assets/phone.png" class="w-8 mr-2" alt="">
              <p class="w-full text-left">{{ kontak.no_hp }}</p>
            </div>
            <div class="flex justify-start w-full mb-2">
              <img src="@/assets/email.png" class="w-8 mr-2" alt="">
              <a :href="kontak.email" class="w-full text-left" target="_blank"><p>{{ kontak.email }}</p></a>
            </div>
            <div class="flex justify-start w-full mb-2">
              <img src="@/assets/facebook.png" class="w-8 mr-2" alt="">
              <a :href="kontak.facebook" class="w-full text-left" target="_blank"><p>{{ facebook }}</p></a>
            </div>
            <div class="flex justify-start w-full mb-2">
              <img src="@/assets/twitter.png" class="w-8 mr-2" alt="">
              <a :href="kontak.twitter" class="w-full text-left" target="_blank"><p>{{ twitter }}</p></a>
            </div>
            <div class="flex justify-start w-full mb-2">
              <img src="@/assets/instagram.png" class="w-8 mr-2" alt="">
              <a :href="kontak.instagram" class="w-full text-left" target="_blank"><p>{{ instagram }}</p></a>
            </div>
          </div>
      </div>
      <div class="mb-6 md:mb-0 text-center xs:flex xs:flex-wrap sm:block xs:justify-end">
        <h5 class="font-medium mb-2 uppercase text-xl xs:text-base md:text-xl xs:w-1/3 xs:flex xs:items-center sm:text-center xs:text-left sm:w-full">General Information</h5>
        <p class="mb-4 xs:w-2/3 md:block sm:flex sm:justify-end md:w-5/6">
          Jam Operasional<br>Senin-Sabtu<br>8:30 - 17:00
        </p>
      </div>
      <div class="mb-6 md:mb-0 text-center flex flex-col justify-center">
        <h5 class="font-medium mb-2 uppercase md:text-xl xs:text-base xs:flex xs:items-center">Lokasi Kantor</h5>
        <p class="mb-4 xs:w-2/3 md:w-full">{{ kontak.alamat }}</p>
        <div class="flex justify-center wrapper w-full">
          <span v-html="kontak.linkAlamat"></span>
        </div>
      </div>
    </div>
  </div>

  <div class="text-center items-center text-white p-4 bg-purple-600">
    © 2021 Copyright:
    <a class="text-white" href="https://tailwind-elements.com/">Kita Serba Digital</a>
  </div>
</footer>   
</template>
<script>
export default{
  props: ['kontak'],
  data(){
    return {
      twitter: '',
      facebook: '',
      instagram: ''
    }
  },
  methods: {
    splitString(){
      this.twitter = this.kontak.twitter.split('/').splice(-1)[0]
      this.facebook = this.kontak.facebook.split('/').splice(-1)[0]
      this.instagram = this.kontak.instagram.split('/').splice(-1)[0]
    }
  },
  updated(){
    this.splitString()
  }
}
</script>
<style>
  .wrapper {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
  }
  .wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>