<template>
  <div>
    <router-view />
  </div>
</template>
<script>
export default{
  
}
</script>
<style>
html, body{
  overflow-x: hidden;
}

body{
  position: relative;
}

::-webkit-scrollbar {
  width: 16px;
}

::-webkit-scrollbar-track {
  background: white;
}

::-webkit-scrollbar-thumb {
  background: #7e22ce;
}

::-webkit-scrollbar-thumb:hover {
  background: #581c87; 
}
</style>