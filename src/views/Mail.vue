<template>
  <div class="card no-padding">
    <div class="card-nav">
      <ul class="list">
        <li class="list-item" v-for="email in emails" key="email.id">
          <a href="#">
            {{ email.theme }}
          </a>
        </li>
      </ul>
    </div>
    <div class="card-body">
      <app-email-body></app-email-body>
    </div>
  </div>
</template>

<script>
import AppEmailBody from "../components/AppEmailBody.vue"

export default {
  inject: ["emails"],
  components: {
    AppEmailBody,
  },
};
</script>

<style scoped></style>
