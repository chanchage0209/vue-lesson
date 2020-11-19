<template>
  <div>
    <router-link to="/todo-list">TodoList</router-link>
    <router-link to="/counter">Counter</router-link>
    <router-link to="/area-select">AreaSelect</router-link>
    <router-link to="/currency">Currency</router-link>
    <router-link to="/form">Form</router-link>
    <router-link to="/style">Style</router-link>
    <router-link to="/toggle">Toggle</router-link>
    <router-link to="/users">Users</router-link>
    <router-link to="/policy">Policy</router-link>

    <hr />
    <div>
      <router-view />
    </div>
    <hr />
  </div>
</template>


<style>
a {
  margin-right: 1em;
}
</style>