<template v-if="!!listCategory">
  <div class="mb-8">
      <div class="bgimage fixed opacity-50 bottom-0 left-0 w-full h-full -z-10"></div>
      <h1 class="text-2xl font-bold pt-4 pl-4">Our Team</h1>
      <div class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 lg:gap-8 md:gap-6 sm:gap-4 xs:gap-4 px-16 my-4">
          <div ref="genrebutton" class="genrebutton w-full border-2 border-purple-600 rounded-3xl" v-for="category in listCategory" :key="category.id" @click="changeActive(category.id)">
              <p class="text-center p-1">{{ category.kategori }}</p>
          </div>
      </div>
      <div v-for="category in listCategory" :key="category.id">
          <div class="grid md:grid-cols-2 sm:grid-cols-1 lg:px-32 md:px-8" v-if="visibleMembers[category.id] == true">
              <div class="mb-8" v-for="member in category.members" :key="member.id">
                <img class="m-auto w-6/12" :src="member.image" alt="">
                <h1 class="font-bold lg:text-2xl md:text-xl sm:text-2xl xs:text-xl text-center pt-4">{{member.member}}</h1>
                <p class="lg:text-xl md:text-lg sm:text-xl xs:text-lg text-center">{{member.division}}</p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: ['listCategory'],
    data(){
        return{
            visibleMembers: [true, false, false, false, false],
            runOnce: true
        }
    },
    methods: {
        changeActive(index){
            for(let x=0; x<this.$refs.genrebutton.length; x++){
                this.$refs.genrebutton[x].classList.remove('activebutton');
                this.visibleMembers[x] = false;
            }
            this.$refs.genrebutton[index].classList.add('activebutton')
            this.visibleMembers[index] = true;
        },
        giveActive(){
            this.$refs.genrebutton[0].classList.add('activebutton')
            this.runOnce = false
        }
    },
    updated(){
        if(this.runOnce){
            this.giveActive()
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

.genrebutton{
    opacity: 0.6;
    transition: 0.5s;
    color: rgb(107, 33, 168);
    font-weight: bold;
}

.genrebutton p{
}

.genrebutton:hover{
    opacity: 1;
    cursor: pointer;
    background: linear-gradient(240deg, #C56FE1 0%, #CB81F2 15%, #8F41F1 100%);
}

.genrebutton:hover > p{
    color: white;
}

.activebutton{
    opacity: 1;
    color: white;
    background: linear-gradient(240deg, #C56FE1 0%, #CB81F2 15%, #8F41F1 100%);
}
</style>