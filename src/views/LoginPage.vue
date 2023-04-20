<template>
    <div class="about">
        <form>
            <h1>Login</h1>
            <label for="contactID">
                <input name="contactID" id="contactID" placeholder="User-token" required>
                <br>
            </label>
            <label for="Password">
                <input name="Password" id="Password" placeholder="Password" required>
            </label>
            <button class="btn long-btn">Login</button>
        </form>
    </div>
  </template>

<script>

export default {
  data() {
    return {
      islogin: true,
    };
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
