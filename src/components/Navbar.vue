<template>
    <nav class="nav-main">
    <img src="@/assets/logo.svg" alt="" width="80">
    <h2 class="todo-list">Todo list app</h2>
  </nav>
</template>

<style scoped>
.nav-main{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: var(--navbar-color);
  
}
.todo-list{
  color: var(--text-color);
  font-size: 1.5rem;
  font-weight: 500;
}

</style>
