 
<template>
    <section class="mt">
        <div class="columns is-centered">
            <div class="column is-10-mobile is-offset-1-mobile is-4">
                <div class="box">
                    <!-- <p class=" mb-4" v-if="message">{{message}}</p> -->
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                        <input class="input" type="email"  placeholder="e.g. alex@example.com">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control">
                        <input class="input" type="password"  placeholder="********">
                        </div>
                    </div>
                    <button class="button is-fullwidth is-success" >Log in</button>
                </div>


                <div class="modal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      <!-- Content ... -->
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Save changes</button>
      <button class="button">Cancel</button>
    </footer>
  </div>
</div>
                

            </div>
        </div>
    </section>
</template>
<script>  
export default {  
  data() {  
    return {  
      name: ""  
    };  
  }  
};  
</script>

<style scoped>
.mt{
    color: red;
    background: rgb(252, 240, 240);
    width: 50%;
    height: 200px;
    margin: auto;
    text-align: center;
}
</style>