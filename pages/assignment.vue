<template>
  <v-container class="d-flex flex-column align-center fill-width">
    <div id="printMe">
      <div id="BannerBG"></div>
      <img src="/DIU Logo.png" alt="DIU Logo" id="BannerImg" />
      <h1>Assignment</h1>
      <table border="1">
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
          <tr>
            <td>Date</td>
            <!-- <td>:</td> -->
            <td>
              {{ $store.state.PerformenceDate }}
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Submitted By</h3>
      <table border="1">
        <tbody>
          <tr>
            <td>Name</td>
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
            <td>{{ $store.state.Section }}</td>
          </tr>
          <tr>
            <td>Shift</td>
            <!-- <td>:</td> -->
            <td>Evening</td>
          </tr>
        </tbody>
      </table>
      <span id="sign">Signature</span>
    </div>
  </v-container>
</template>

<script>
export default {
  head: {
    title: "Assignment",
  },
  layout: "print",
};
</script>

<style scoped></style>
