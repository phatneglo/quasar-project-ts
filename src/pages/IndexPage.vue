<template>
  <q-page class="q-pa-md">
    <div class="row q-col-gutter-md">
      <div class="col-xs-12 col-sm-6 col-md-3">
        <q-banner class="bg-primary text-white">
          <q-avatar icon="people" background-color="white" color="primary" />
          <div>
            <div class="text-h6">Users</div>
            <div class="text-h2">1,234</div>
          </div>
        </q-banner>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-3">
        <q-banner class="bg-secondary text-white">
          <q-avatar
            icon="post_add"
            background-color="white"
            color="secondary"
          />
          <div>
            <div class="text-h6">Posts</div>
            <div class="text-h2">567</div>
          </div>
        </q-banner>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-3">
        <q-banner class="bg-tertiary text-white">
          <q-avatar icon="comment" background-color="white" color="tertiary" />
          <div>
            <div class="text-h6">Comments</div>
            <div class="text-h2">8,910</div>
          </div>
        </q-banner>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-3">
        <q-banner class="bg-quaternary text-white">
          <q-avatar
            icon="favorite"
            background-color="white"
            color="quaternary"
          />
          <div>
            <div class="text-h6">Likes</div>
            <div class="text-h2">1,112</div>
          </div>
        </q-banner>
      </div>
    </div>

    <div class="row q-mt-md">
      <div class="col-xs-12 col-md-6">
        <q-card>
          <q-card-section>
            <div class="text-h6">Recent Posts</div>
            <!-- Add recent posts here -->
          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-12 col-md-6">
        <q-card>
          <q-card-section>
            <div class="text-h6">Recent Comments</div>
            <!-- Add recent comments here -->
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts"></script>

<style scoped>
.bg-primary {
  background-color: #42a5f5;
}

.bg-secondary {
  background-color: #66bb6a;
}

.bg-tertiary {
  background-color: #ef5350;
}

.bg-quaternary {
  background-color: #ab47bc;
}
</style>
