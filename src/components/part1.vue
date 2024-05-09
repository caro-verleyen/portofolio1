

<script setup>
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
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  font-family: "RobotoMono";
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

.Mep {
  display: flex;
  height: 80px;
  padding-top: 5px;
  padding-left: 600px;
  padding-right: 15px;
  justify-content: space-around;

  padding-top: 15px;

  font-family: "RobotoMono";
  font-size: 18px;
  color: white;
  width: 1160px;
  position: relative;
}
.acceuil {
  font-family: "RobotoMono-Regular", sans-serif;
  font-weight: bold;
  font-size: medium;

  font-weight: 500;
  font-style: normal;
}
#icons {
  cursor: pointer;
  display: none;
}
@media (max-width: 650px) {
  #icons {
    display: block;
  }
  #icons:before {
    content: "\2630";
  }
  .active #icons:before {
    content: "\2715";
  }
}
</style>
