
<template>
    <b-navbar>


             <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-light">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-primary">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
         </b-navbar>
</template>

<script>
    export default {
        methods: {
            clickMe() {
            }
        }
    }
</script>