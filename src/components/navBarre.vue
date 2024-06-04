<script>
export const navBarre = {
  name: 'navBarre',
}


</script>

<template>
  
    <header class="navBarre">
    <nav class="active">
      <div class="Mep">
        <router-link id="notFound__link" to="/error404-1.png">tarifs</router-link><span>|</span>
        <router-link id="aPropos__link" to="/#aPropos">A propos</router-link>
        <span>|</span>
        <router-link id="Modal__link" to="/Modal">Projets</router-link> 
        
        <span>|</span>
        <router-link id="TheContact__link" to="/TheContact"
          >Contact</router-link
        >
      </div>
      
    </nav>
    
  </header>
</template>
<style>
  .navBarre {
    font-family: "robotoMono-Bold", Tahoma, Geneva, Verdana, sans-serif;
  }
  .Mep {
    display: flex;
    height: 80px;
    padding-top: 5px;
    padding-left: 600px;
    padding-right: 15px;
    justify-content: space-around;

    padding-top: 15px;

    font-size: 18px;
    color: white;
    width: 1160px;
    position: relative;
  }
</style>