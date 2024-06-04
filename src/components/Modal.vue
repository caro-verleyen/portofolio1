<script scoped>
export default {
  name: 'Modal',
  props:['revele','toggleModal']
}
</script>

<template>

<div class="overlay-modal" ></div>
<div id="modal" class="bloc-modale" v-if="revele">
  
  <div>
    <button type="button" class="btn-modal" v-on:click="toggleModal" >X</button>
    
  </div> 
  
    <div class="cardContainer">
      <div class="card">
        <img src="/public/blog2.png" class="cardImg" alt="un blog">
        <div class="cardSujet">
            <h4 class="cardTitre">mon blog</h4>
            <p class="cardText"> Un blog sur mes loisirs </p>
            <a href="https://github.com/caro-verleyen"
              >cliquez sur l'icone :<img src="/public/github-24.png" alt="logo github"
            /></a>
        </div>
      </div>
    </div>
    <div class="card">
        <img src="/public/cdg4.png" class="cardImg" alt="un blog">
        <div class="cardSujet">
            <h4 class="cardTitre">un cahier des charges</h4>
            <p class="cardText"> exercice sur le cahier des charges</p>
            <a href="https://github.com/caro-verleyen"
              >cliquez sur l'icone :<img src="/public/github-24.png" alt="logo github"
            /></a>
        </div>
    </div>

    <div class="card">
        <img src="/public/cv3.png" class="cardImg" alt="un blog">
        <div class="cardSujet">
            <h4 class="cardTitre">mon CV</h4>
            <p class="cardText"> Mon curriculum vitae réalisé avec html et css</p>
            <a href="https://github.com/caro-verleyen"
              >cliquez sur l'icone :<img src="/public/github-24.png" alt="logo github"
            /></a>
        </div>
    </div>

    <div class="card">
        <img src="/public/dyn esp com1.png" class="cardImg" alt="un blog">
        <div class="cardSujet">
            <h4 class="cardTitre">dynamiser un espace commentaire</h4>
            <p class="cardText"> comment dynamiser un espace commentaire avec javascript</p>
            <a href="https://github.com/caro-verleyen"
              >cliquez sur l'icone :<img src="/public/github-24.png" alt="logo github"
            /></a>
        </div>
    </div>
   
</div>  


</template>

<style scoped>
  a {
    color: rgb(221, 214, 214);
  }

  .cardContainer {
    padding-right: 10px;
  }

  .bloc-modale {
    font-family: "robotoMono-Bold", Tahoma, Geneva, Verdana, sans-serif;
    background: url(/src/assets/fond2.png);
    position: fixed;
    top: 150px;
    left: 190px;
    padding-top: 100px;
    padding-bottom: 20px;
    padding-right: 20px;
    padding-left: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .cardImg {
    width: 350px;
    height: 350px;
    object-fit: contain;
  }
  .cardSujet {
    font-family: "robotoMono-Regular", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 0.75em;
  }

  .btn-modal {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .cardImg:hover {
    box-shadow: rgb(90, 91, 92) 10px 10px 15px;
  }
  .overlay-modal {
    bottom: 0;
    display: none;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 102;
  }
</style>