<script>
</script>



<template>
  <header class="enTete">
    <nav class="active" v-on:click.prevent>
      <div class="Mep">
        <a href="#" class="acceuil" v-on:click="makeActive('acceuil')"
          >Acceuil</a
        >
        <a href="#" class="projets" v-on:click="makeActive('projets')"
          >Projets</a
        >
        <a href="#" class="contact" v-on:click="makeActive('contact')"
          >contact</a
        >
      </div>
    </nav>
  </header>
  <main>
    <section class="m1">
      <img class="img1" src="/public/img3.png.jpg" alt="geek fille" />

      <div class="intro">
        <h1 class="P1">bienvenus sur mon portfolio en ligne</h1>
        <p class="P2">je suis Caroline, Développeuse Web Junior.</p>

        <p class="p3">
          Suite à une reconvertion professionnelle j'ai suivi une formation en
          développement web qui m'a permis d'acquerir des compétences en
          HTML,CSS et Javascript. Grace à cette formation j'ai appris à créer
          des sites Web dynamiques de A à Z <br />
          N'hésitez pas à regarder quelques une de mes réalisations!
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
* {
  padding: 0;
  margin: 0;
}
a,
a:visited {
  color: rgb(243, 239, 239);
  text-decoration: none;
  text-transform: uppercase;
}
a:hover {
  color: rgb(148, 6, 6);
}
.m1 {
  padding-top: 150px;
}
.m1 img {
  float: right;
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
  font-family: "robotoMono-Bold", Tahoma, Geneva, Verdana, sans-serif;
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
</style>
