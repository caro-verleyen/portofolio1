
<script>


import Modal from './Modal.vue'
export default{
  name:'aPropos',
  data(){
    return{
      revele:false
    }
  },
  components:{
    'Modal': Modal
  },
  methods:{
    toggleModal:function(){
      this.revele=!this.revele
    }
  }
}
</script>



<template>
   

  <main>
    <Modal v-bind:revele="revele" v-bind:toggleModal="toggleModal"></Modal>
    <section class="m1">
      
      <img class="img1" src="/public/img3.png.jpg" alt="geek fille" />

      <div class="intro">
        <h1 class="P1">bienvenus sur mon portfolio en ligne</h1>
        <p class="P2">je suis Caroline VERLEYEN, Développeuse Web Junior.</p>

        <p class="p3">
          Suite à une reconvertion professionnelle j'ai suivi une formation en
          développement web qui m'a permis d'acquerir des compétences en
          HTML,CSS et Javascript. Grace à cette formation j'ai appris à créer
          des sites Web dynamiques de A à Z <br />
          N'hésitez pas à regarder quelques une de mes réalisations ici <a href="#" class="btn-success" > <img class=click1 v-on:click="toggleModal"   src="/public/click1.png" alt="cliquez ici" ></a>
        </p>

      </div>
      
      <div class="p4">
        <h3>
          J'ai hate de pouvoir discuter de vos futurs projets, alors n'hésitez
          pas à me contacter
        </h3>
      </div>
    </section>
   
  </main>
 
</template>


<style>
  a,
  a:visited {
    color: rgb(218, 212, 212);
    text-decoration: underline;
    text-transform: uppercase;
  }

  * {
    padding: 0;
    margin: 0;
  }

  .m1 {
    padding-top: 130px;
    font-family: "robotoMono-Bold", Tahoma, Geneva, Verdana, sans-serif;
  }
  .m1 img {
    float: right;
  }

  .acceuil {
    font-weight: bold;
    font-size: medium;

    font-weight: 500;
    font-style: normal;
  }
  .intro {
    text-align: center;

    flex-direction: column;
    align-items: flex-start;
    display: flex;
    padding-left: 100px;
  }
  .img1 {
    width: 450px;
    height: 450px;
    object-fit: cover;
    border-radius: 50%;
    margin-left: auto;
    margin-right: 100px;
    display: flex;
    box-shadow: 0 0 10px black;
  }
  .P1 {
    font-family: "robotoMono-Regular", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 2.5em;
    text-transform: uppercase;
    justify-content: center;

    padding: 30px;
  }
  .p3 {
    text-align: start;
    padding-right: 200px;
    line-height: 40px;
  }
  .p4 {
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
    padding-top: 100px;
  }
  .acceuil {
    font-weight: bold;
    font-size: medium;

    font-weight: 500;
    font-style: normal;
  }
  .click1 {
    width: 50px;
    height: 50px;
    margin-right: 400px;
  }
</style>
