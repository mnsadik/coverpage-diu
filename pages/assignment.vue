<template>
  <div class="warper my-2 mx-auto pa-12 elevation-1 d-print-block">
    <v-img
      contain
      lazy-src="/icon.png"
      max-height="100"
      src="/icon.png"
      class="mt-2"
    >
    </v-img>
    <h1 class="mt-10 px-8 py-4">Assignment</h1>
    <table border="1" class="text-subtitle-1">
      <tbody>
        <tr>
          <td>Submitted To</td>
          <!-- <td>:</td> -->
          <td>{{ $store.state.SubTo }}</td>
        </tr>
        <tr>
          <td>Course Title</td>
          <!-- <td>:</td> -->
          <td>{{ $store.state.Course.name }}</td>
        </tr>
        <tr>
          <td>Course Code</td>
          <!-- <td>:</td> -->
          <td>{{ $store.state.Course.value }}</td>
        </tr>
      </tbody>
    </table>
    <p class="text-body-1 mt-6">Submitted By</p>
    <table border="1">
      <tbody>
        <tr>
          <td>Submitted By</td>
          <!-- <td>:</td> -->
          <td>{{ $store.state.SubBy }}</td>
        </tr>
        <tr>
          <td>ID No.</td>
          <!-- <td>:</td> -->
          <td>{{ $store.state.IdNo }}</td>
        </tr>
        <tr>
          <td>Department</td>
          <!-- <td>:</td> -->
          <td>CSE</td>
        </tr>
        <tr>
          <td>Section</td>
          <!-- <td>:</td> -->
          <td>B</td>
        </tr>
        <tr>
          <td>Shift</td>
          <!-- <td>:</td> -->
          <td>Evening</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  methods: {
    print() {
      window.print();
    },
  },
};
</script>

<style scoped>
@media print, screen {
  table {
    width: 80%;
    border-collapse: collapse;
  }
  td {
    padding: 6px 12px;
  }

  td:nth-child(1) {
    width: 4.8cm;
  }
  .warper {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 21cm;
    height: 29.7cm;
  }
  .warper::before {
    content: "";
    position: absolute;
    top: 0;
    width: 70%;
    height: 5cm;
    background-color: #ffffa1;
  }
}
</style>
