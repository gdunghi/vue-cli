<template>
       <div>
        <ul>
            <li>
                <router-link to="/todo">
                    <button>Todo {{$store.getters.incompletedTodo.length}}</button>
                </router-link>
            </li>
            <li>
                <router-link to="/nothink">
                    <button>Nothink</button>
                </router-link>
            </li>
        </ul>
      </div>
</template>

<script>
export default {};
</script>

<style>

</style>
