<template>
  <div class="states-list">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome do estado</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="state in states" :key="state.id">
          <td>{{ state.id }}</td>
          <td>{{ state.nome }}</td>
          <td>
            <button @click="remove(state)">Remover</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: {
    states: {
      type: Array,
      required: true,
    },
  },
  methods: {
    remove(state) {
      // eslint-disable-next-line no-alert
      const answer = window.confirm(`Deseja mesmo remover o estado ${state.nome}?`);
      if (answer) {
        this.$emit('remove', state.id);
      }
    },
  },
};
</script>
<style scoped>
  .states-list {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
</style>
