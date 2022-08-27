<template>
  <div>
  <section>
   <div class="title"><p>Photography</p></div> 
    <div class="catalog">
    <img class="img-card" src="../assets/01.png" alt="">
    <img class="img-card" src="../assets/01.png" alt="">
    <img class="img-card" src="../assets/01.png" alt="">
    <img class="img-card" src="../assets/01.png" alt="">
    </div>
  </section>
  </div>
</template> 

<script>
export default {};
</script>

<style>
.catalog{ 
@apply  w-3/5 mx-auto flex flex-wrap justify-center mt-10
}
.title{
@apply w-3/5 -mb-5 mt-5 p-3 mx-auto
}
.img-card{
@apply w-72 m-1
}
</style>