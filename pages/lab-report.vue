<template>
  <v-container class="d-flex flex-column align-center fill-width">
    <div
      style="
        width: 21cm;
        height: 29.7cm;
        background: white;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        display: block;
        position: relative;
      "
      id="printMe"
    >
      <div
        style="
          width: 70%;
          height: 5cm;
          background: #ffffa1;
          position: absolute;
          transform: translateX(-50%);
          left: 50%;
        "
      ></div>
      <img
        src="/DIU Logo.png"
        alt=""
        style="
          max-width: 270px;
          transform: translateX(-50%);
          position: absolute;
          top: 1.7cm;
          left: 50%;
        "
      />
      <h1
        style="
          font-size: 32px;
          font-weight: 500;
          text-align: center;
          padding-top: 5.9cm;
          padding-bottom: 0.6cm;
        "
      >
        Lab Report
      </h1>
      <table
        border="1"
        class="text-subtitle-1"
        style="
          width: 64.7619047619%;
          border-collapse: collapse;
          margin-left: 17.61904761905%;
        "
      >
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
            <td>Experiment No.</td>
            <!-- <td>:</td> -->
            <td>{{ $store.state.ExpNo }}</td>
          </tr>
          <tr>
            <td>Experiment Name</td>
            <!-- <td>:</td> -->
            <td>{{ $store.state.ExpName }}</td>
          </tr>
          <tr>
            <td>Date of Performence</td>
            <!-- <td>:</td> -->
            <td>
              {{ $store.state.PerformenceDate }}
            </td>
          </tr>
          <tr>
            <td>Date of Submission</td>
            <!-- <td>:</td> -->
            <td>{{ $store.state.SubmissionDate }}</td>
          </tr>
        </tbody>
      </table>
      <h3
        style="
          font-size: 20px;
          font-weight: 500;
          text-align: center;
          padding: 0.4cm;
        "
      >
        Submitted By
      </h3>
      <table
        border="1"
        style="
          width: 64.7619047619%;
          border-collapse: collapse;
          margin-left: 17.61904761905%;
        "
      >
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
            <td>B</td>
          </tr>
          <tr>
            <td>Shift</td>
            <!-- <td>:</td> -->
            <td>Evening</td>
          </tr>
        </tbody>
      </table>
      <p
        style="
          font-size: 14px;
          font-weight: 300;
          position: absolute;
          bottom: 6%;
          right: 20%;
          padding: 10px 30px;
          border-top: 1px dotted black;
        "
      >
        Signature
      </p>
    </div>
    <v-btn color="primary" class="mt-6" @click="print()">Print</v-btn>
    <!-- <v-btn
      class="d-print-none"
      onclick="printJS({ printable: 'printMe', type: 'html', targetStyles:['*'] header: 'PrintJS - Form Element Selection' })"
    >
      Print
    </v-btn> -->
  </v-container>
</template>

<script>
export default {
  methods: {
    async print() {
      // Pass the element id here
      await this.$htmlToPaper("printMe");
    },
  },
};
</script>

<style scoped>
td {
  font-size: 14px;
  padding: 6px 12px;
}
td:nth-child(1) {
  font-weight: 500;
  width: 4.5cm;
}
</style>
