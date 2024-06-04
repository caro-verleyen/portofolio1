
<script>
export const TheContact= {
  name: 'TheContact',
}
</script>


<template>
  
<p class="retour">
    retour à la
    <router-link id="aPropos__link" to="/#aPropos">page d'acceuil</router-link>
  </p>
  <form class="message" id="f1" onsubmit="alert('le message est envoyé avec succès!')" >
    <label for="lastname">Nom</label>
    <input
      class="LastName"
      id="LastName"
      type="text"
      
      placeholder="Nom"
      required
    />
    <label for="firstname">Prénom</label>
    <input
      class="FirstName"
      id="FirstName"
      type="text"
      
      placeholder="Prénom"
      required
    />
    <label for="email">E-mail</label>
    <input
      class="Email"
      id="Email"
      type="text"
      
      placeholder="Votre adresse mail"
      required
    />
    <label for="mess">Votre message</label>
    <textarea
      class="Mess"
      id="Mess"
     
      required
    ></textarea>
    <input
      class="Env"
      id="Env"
      type="submit"
      
      value="valider"
    />
      
     
  </form>
</template>

<style scoped>
  .message {
    font-family: "robotoMono-Bold", Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    align-content: center;
    flex-direction: column;
    padding-top: 10px;
    padding-left: 600px;
    padding-right: 600px;
    line-height: 50px;
  }

  .LastName {
    font-family: "robotoMono-Bold", Tahoma, Geneva, Verdana, sans-serif;
    height: 50px;
  }
  .FirstName {
    font-family: "robotoMono-Bold", Tahoma, Geneva, Verdana, sans-serif;
    height: 50px;
  }
  .Email {
    font-family: "robotoMono-Bold", Tahoma, Geneva, Verdana, sans-serif;
    height: 50px;
  }
  .Mess {
    font-family: "robotoMono-Bold", Tahoma, Geneva, Verdana, sans-serif;
    height: 150px;
  }
  .Env {
    font-family: "robotoMono-Bold", Tahoma, Geneva, Verdana, sans-serif;
    padding-top: 10px;
    border-radius: 30%;
    width: 80px;
    height: 80px;
  }
  .retour {
    font-family: "robotoMono-Bold", Tahoma, Geneva, Verdana, sans-serif;
    padding-left: 10px;
  }
</style>


