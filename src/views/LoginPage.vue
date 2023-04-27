<template>
    <div class="about">
      {{ accessToken }}
        <form>
            <h1>Login</h1>
            <label for="contactID">
                <input
                name="contactID"
                id="contactID"
                placeholder="User-token"
                required
                v-model="username">
                <br>
            </label>
            <label for="Password">
                <input
                type="password"
                name="Password"
                id="Password"
                placeholder="Password"
                required
                v-model="password">
            </label>
            <button class="btn long-btn" @click.prevent="handleLogin()">Login</button>
        </form>
    </div>
  </template>

<script>
import backendService from '@/service/backendService';

export default {
  data() {
    return {
      islogin: true,
      username: '',
      password: '',
    };
  },
  methods: {
    async handleLogin() {
      await backendService.login(this.username, this.password)
        .then((response) => {
          console.log(response.data);
          this.$store.commit('setJwtToken', response.data.accessToken);
        });
    },
  },
  computed: {
    accessToken() {
      return this.$store.state.jwttoken;
    },
  },
};

</script>

<style lang="scss" scoped>
    #contactID {
        text-align: center;
    }

    #Password {
        text-align: center;
    }

    form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        * {
            margin: 4px;
        }
    }
</style>
