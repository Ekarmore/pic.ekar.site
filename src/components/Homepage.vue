<template>
  <div>
  <section>
   <div class="title"><p>Ekar</p><p class="title-two">Photographer</p></div> 
    <div class="catalog">
    <div class="img-a"><router-link class="link" to="page">Unnoticed</router-link><img class="img-card" src="../assets/01.png" alt=""></div>
    <div class="img-a"><router-link class="link" to="page">a</router-link><img class="img-card" src="../assets/01.png" alt=""></div>
    <div class="img-a"><a class="link" href="">a</a><img class="img-card" src="../assets/01.png" alt=""></div>
    <div class="img-a"><a class="link" href="">Coming Soon</a><img class="img-card" src="../assets/01.png" alt=""></div>
    </div>
  </section>
  </div>
</template> 

<script>
export default {};
</script>

<style>
.catalog{ 
@apply mt-10 w-11/12 mx-auto flex flex-wrap justify-center md:w-3/5 md:mt-10 
}
.title{
@apply w-11/12 md:w-2/5  mt-10 mx-auto text-xl font-serif 
}
.title-two{
@apply text-base opacity-80
}
.img-card{
@apply mb-5 md:w-72 md:m-1 bg-green-200
}
.img-a{
@apply relative
}
.link{
@apply absolute text-white w-full h-full text-center text-3xl font-thin font-serif flex justify-center items-center  md:opacity-0 md:hover:opacity-100 transition-all ease-in-out 
}
</style>