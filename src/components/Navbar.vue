<template>
  <nav
    class="whitetheme border-gray-200 px-2 sm:px-4 py-2.5 drop-shadow-md navbarbg" v-if="!whitetheme"
  >
    <div class="flex flex-wrap justify-between items-center lg:mx-auto">
      <router-link :to="{ path: '/home' }" href="#" class="flex items-center justify-center md:w-1/6">
        <img src="@/assets/logo.png" class="mr-3 h-10 sm:h-16" alt="Logo KSD" />
      </router-link>
      <button
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm xs:mr-0 text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 text-grey-400 hover:bg-purple-500 focus:ring-purple-600 focus:text-white focus:bg-purple-500 hover:text-white nav-toggler"
        style="width: auto !important"
        data-target="#mobile-menu"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          fill="currentColor"
          id="menu"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="w-full hidden md:!block md:w-5/6 sm:w-full " id="mobile-menu">
        <ul
          class="navbarcontainer flex transition-all duration-200 items-center justify-end sm:w-full flex-col md:flex-row md:mt-0 md:text-sm md:font-medium"
        >
          <li id="navbarhome" class="navbaritem xs:w-full sm:w-full md:w-auto p-0">

            <router-link :to="{ path: '/home' }" href="#"
              class="block text-center py-2 pr-4 pl-3 border-b border-gray-300 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-purple-600 dark:hover:bg-purple-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 lg:text-lg" @click="movescreen('home')"

              >
                Home
              </router-link>
          </li>
          <li id="navbarabout" class="navbaritem xs:w-full sm:w-full md:w-auto p-0">
            <router-link :to="{ path: '/about' }"
              href="#"
              class="block text-center py-2 pr-4 pl-3 border-b border-gray-300 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-purple-600 dark:hover:bg-purple-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 lg:text-lg"
              @click="movescreen('about')"
              >About</router-link
            >
          </li>
          <li id="navbarproduct" class="navbaritem xs:w-full sm:w-full md:w-auto p-0">
            <router-link :to="{ path: '/product' }"
              href="#"
              class="block text-center py-2 pr-4 pl-3 border-b border-gray-300 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-purple-600 dark:hover:bg-purple-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 lg:text-lg"
              @click="movescreen('product')"
              >Product</router-link
            >
          </li>
          <li id="navbargallery" class="navbaritem xs:w-full sm:w-full md:w-auto p-0">
            <router-link :to="{ path: '/gallery' }"
              href="#"
              class="block text-center py-2 pr-4 pl-3 border-b border-gray-300 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-purple-600 dark:hover:bg-purple-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 lg:text-lg"
              @click="movescreen('gallery')"
              >Galeri</router-link
            >
          </li>
          <li id="navbarmitra" class="navbaritem xs:w-full sm:w-full md:w-auto p-0">
            <router-link :to="{ path: '/mitra' }"
              href="#"
              class="block text-center py-2 pr-4 pl-3 border-b border-gray-300 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-purple-600 dark:hover:bg-purple-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 lg:text-lg"
              @click="movescreen('mitra')"
              >Mitra</router-link
            >
          </li>
          <li id="navbarfaq" class="navbaritem xs:w-full sm:w-full md:w-auto p-0">
            <router-link :to="{ path: '/faq' }"
              href="#"
              class="block text-center py-2 pr-4 pl-3 border-b border-gray-300 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-purple-600 dark:hover:bg-purple-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 lg:text-lg"
              @click="movescreen('faq')"
              >FAQS</router-link
            >
          </li>
          <li id="navbarcontact" class="navbaritem xs:w-full sm:w-full md:w-auto p-0">
            <router-link :to="{ path: '/contact' }"
              href="#"
              class="block text-center py-2 pr-4 pl-3 border-b border-gray-300 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-purple-600 dark:hover:bg-purple-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 lg:text-lg"
              @click="movescreen('contact')"
              >Contact</router-link
            >
          </li>
          <li id="navbarberita" class="navbaritem xs:w-full sm:w-full md:w-auto p-0">
            <router-link :to="{ name: 'Berita' }" class="block text-center py-2 pr-4 pl-3 border-b border-gray-300 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-purple-600 dark:hover:bg-purple-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 lg:text-lg">
                Berita
              </router-link>
          </li>
          <li id="navbaralbum" class="navbaritem xs:w-full sm:w-full md:w-auto p-0">
            <router-link :to="{ name: 'Album' }" class="block text-center py-2 pr-4 pl-3 border-b border-gray-300 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-purple-600 dark:hover:bg-purple-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 lg:text-lg">
                Album
              </router-link>
          </li>
          <li id="navbarourteam" class="navbaritem xs:w-full sm:w-full md:w-auto p-0">
            <router-link :to="{ name: 'OurTeam' }" class="block text-center py-2 pr-4 pl-3 border-b border-gray-300 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-purple-600 dark:hover:bg-purple-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 lg:text-lg">
                Our Team
              </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <nav v-else
    class="purpletheme border-gray-200 px-2 sm:px-4 py-2.5 drop-shadow-md navbarbg"
  >
    <div class="flex flex-wrap justify-between items-center lg:mx-auto">
      <router-link :to="{ path: '/home' }" href="#" class="flex items-center justify-center md:w-1/6">
        <img src="@/assets/logoputih.png" class="mr-3 h-10 sm:h-16" alt="Logo KSD" />
      </router-link>
      <button
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm xs:mr-0 text-white rounded-lg md:hidden focus:outline-none focus:ring-2 text-grey-400 hover:bg-purple-500 focus:ring-purple-600 focus:text-white focus:bg-purple-500 hover:font-black nav-toggler"
        style="width: auto !important"
        data-target="#mobile-menu"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          fill="currentColor"
          id="menu"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="w-full hidden md:!block md:w-5/6 sm:w-full " id="mobile-menu">
        <ul
          class="navbarcontainer flex transition-all duration-200 items-center justify-end sm:w-full flex-col md:flex-row md:mt-0 md:text-sm md:font-medium"
        >
          <li id="navbarhome" class="navbaritem xs:w-full sm:w-full md:w-auto p-0">

            <router-link :to="{ path: '/home' }" href="#"
              class="block text-white text-center py-2 pr-4 pl-3 hover:font-black border-b border-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 text-gray-400 md:hover:font-bold hover:bg-transparent hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 lg:text-lg" @click="movescreen('home')" 

              >
                Home
              </router-link>
          </li>
          <li id="navbarabout" class="navbaritem xs:w-full sm:w-full md:w-auto p-0">
            <router-link :to="{ path: '/about' }"
              href="#"
              class="block text-white text-center py-2 pr-4 pl-3 hover:font-black border-b border-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 text-gray-400 md:hover:font-bold hover:bg-transparent hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 lg:text-lg"
              @click="movescreen('about')"
              >About</router-link
            >
          </li>
          <li id="navbarproduct" class="navbaritem xs:w-full sm:w-full md:w-auto p-0">
            <router-link :to="{ path: '/product' }"
              href="#"
              class="block text-white text-center py-2 pr-4 pl-3 hover:font-black border-b border-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 text-gray-400 md:hover:font-bold hover:bg-transparent hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 lg:text-lg"
              @click="movescreen('product')"
              >Product</router-link
            >
          </li>
          <li id="navbargallery" class="navbaritem xs:w-full sm:w-full md:w-auto p-0">
            <router-link :to="{ path: '/gallery' }"
              href="#"
              class="block text-white text-center py-2 pr-4 pl-3 hover:font-black border-b border-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 text-gray-400 md:hover:font-bold hover:bg-transparent hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 lg:text-lg"
              @click="movescreen('gallery')"
              >Galeri</router-link
            >
          </li>
          <li id="navbarmitra" class="navbaritem xs:w-full sm:w-full md:w-auto p-0">
            <router-link :to="{ path: '/mitra' }"
              href="#"
              class="block text-white text-center py-2 pr-4 pl-3 hover:font-black border-b border-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 text-gray-400 md:hover:font-bold hover:bg-transparent hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 lg:text-lg"
              @click="movescreen('mitra')"
              >Mitra</router-link
            >
          </li>
          <li id="navbarfaq" class="navbaritem xs:w-full sm:w-full md:w-auto p-0">
            <router-link :to="{ path: '/faq' }"
              href="#"
              class="block text-white text-center py-2 pr-4 pl-3 hover:font-black border-b border-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 text-gray-400 md:hover:font-bold hover:bg-transparent hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 lg:text-lg"
              @click="movescreen('faq')"
              >FAQS</router-link
            >
          </li>
          <li id="navbarcontact" class="navbaritem xs:w-full sm:w-full md:w-auto p-0">
            <router-link :to="{ path: '/contact' }"
              href="#"
              class="block text-white text-center py-2 pr-4 pl-3 hover:font-black border-b border-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 text-gray-400 md:hover:font-bold hover:bg-transparent hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 lg:text-lg"
              @click="movescreen('contact')"
              >Contact</router-link
            >
          </li>
          <li id="navbarberita" class="navbaritem xs:w-full sm:w-full md:w-auto p-0">
            <router-link :to="{ name: 'Berita' }" class="block text-white text-center py-2 pr-4 pl-3 hover:font-black border-b border-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 text-gray-400 md:hover:font-bold hover:bg-transparent hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 lg:text-lg">
                Berita
              </router-link>
          </li>
          <li id="navbaralbum" class="navbaritem xs:w-full sm:w-full md:w-auto p-0">
            <router-link :to="{ name: 'Album' }" class="block text-white text-center py-2 pr-4 pl-3 hover:font-black border-b border-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 text-gray-400 md:hover:font-bold hover:bg-transparent hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 lg:text-lg">
                Album
              </router-link>
          </li>
          <li id="navbarourteam" class="navbaritem xs:w-full sm:w-full md:w-auto p-0">
            <router-link :to="{ name: 'OurTeam' }" class="block text-white text-center py-2 pr-4 pl-3 hover:font-black border-b border-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 text-gray-400 md:hover:font-bold hover:bg-transparent hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 lg:text-lg">
                Our Team
              </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
  props: ['navbaron', 'whitetheme'],
  data(){
    return{
      navbarvariable: true,
    }
  },
  methods: {
    movescreen(id){
      if(document.getElementById(id) != null){
        var scrollDiv = document.getElementById(id).offsetTop;
        window.scrollTo(0, scrollDiv);
        var listnavbar = document.getElementsByClassName('navbaritem')
        for(let x=0; x < listnavbar.length; x++){
          listnavbar[x].classList.remove('activenavbar');
        }
        document.getElementById('navbar'+id).classList.add('activenavbar');
      }
    },
    setnavbar(element){
      document.getElementById('navbar'+element).classList.add('activenavbar');
      if(element != 'home'){
        this.navbarvariable = false;
      }else{
        this.navbarvariable = true;
      }
    },
    moveup(){
      this.$nextTick(()=> {
          this.movescreen(this.$route.params.id)
      })
    },
  },
  mounted(){
    if(this.navbaron != null){
      this.setnavbar(this.navbaron);
    }
    
    $(document).ready(function () {
      $(".nav-toggler").click(function() {
          $("#mobile-menu").animate({
              height: "toggle",
              display: "!block",
          });
        $("#mobile-menu").toggleClass("hidden");
      })
    });

    this.moveup()
  },
  updated(){
    this.moveup()
  }
};

// references
// $(document).ready(function () {
//   $(".nav-toggler").each(function (_, navToggler) {
//     var target = $(navToggler).data("target");
//     $(navToggler).on("click", function () {
//       $(target).animate({
//         height: "toggle",
//       });
//     });
//   });
// });

// sendiri
</script>
<style scoped>
.whitetheme .activenavbar > a{
  color: #9333ea;
}

.purpletheme .activenavbar > a{
  font-weight: 900;
}

.navbarcontainer{
  line-height: 3;
  transition: 1s;
}

.navbarbg{
  background: #c100fe;
}
</style>