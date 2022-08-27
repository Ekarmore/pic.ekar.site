<template>
  <div>
  <section>
   <div class="title"><p>Ekar</p></div> 
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
@apply w-11/12  md:w-3/5 mx-auto flex flex-wrap justify-center mt-20
}
.title{
@apply md:w-3/5  mt-5 mx-auto text-lg font-serif 
}
.img-card{
@apply mb-5 md:w-72 md:m-1
}
.img-a{
@apply relative
}
.link{
@apply absolute text-white w-full h-full text-center text-3xl font-thin font-serif flex justify-center items-center opacity-0 hover:opacity-100 transition-all ease-in-out 
}
</style>