<template>
    <div class="about">
        <form>
            <h1>Login</h1>
            <label for="contactID">
                <input
                name="contactID"
                id="contactID"
                placeholder="Username"
                required
                v-model="username">
                <br>
            </label>
            <label for="Password">
                <input
                :type="(inputVisible) ? 'text' : 'password'"
                name="Password"
                id="Password"
                placeholder="Password"
                required
                v-model="password">
            </label>
            <label for="pasvis">show password
              <input type="checkbox" id="pasvis" v-model="inputVisible">
            </label> <!--Hallo Tino, wie geht es dir?-->
            <button class="btn long-btn" @click.prevent="handleLogin()">Login</button>
            <button class="btn long-btn" @click.prevent="handleRegister()">Register</button>
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
      inputVisible: false,
    };
  },
  methods: {
    async handleLogin() {
      await backendService.login(this.username, this.password)
        .then((response) => {
          console.log(response.data);
          this.$store.commit('setJwtToken', response.data.accessToken);
        });
      await backendService.getUserInfo(this.$store.state.jwttoken)
        .then((response) => {
          console.log(response.data);
          this.$store.commit('setUserToken', response.data.identifierToken);
        });
      this.store.commit('setLoggedIn', true);// Tino ist eine banane
      this.$router.push('/HomeMenu');
    },
    async handleRegister() {
      await backendService.register(this.username, this.password)
        .then((response) => {
          console.log(response.data);
          this.handleLogin();
        });
    },
  },
  computed: {
    accessToken() {
      return this.$store.state.jwttoken;
    },
    userToken() {
      return this.$store.state.usertoken;
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
