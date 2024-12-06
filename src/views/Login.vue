<template>
  <from class="card" @submit.prevent="submit">
    <h2>Мини клон Gmail</h2>
    <div class="form-control">
      <label for="email">Email</label>
      <input type="text" id="email" v-model.trim="email" />
    </div>

    <div class="form-control">
      <label for="password">Пароль</label>
      <input type="password" id="password" v-model.trim="password" />
    </div>

    <button class="btn primary" type="submit">Войти</button>
    <button class="btn warning">Забыли пароль</button>
    <router-link to="/Forget">Забыли пароль</router-link>
  </from>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    isValid() {
      return this.email !== "" && this.password !== "";
    },
  },

  methods: {
    submit() {
      if (this.isValid) {
        // login
      }
    },
  },
};
</script>

<style scoped></style>
