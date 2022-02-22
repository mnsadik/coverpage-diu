<template>
  <v-app>
    <Navbar />
    <v-main>
      <client-only>
        <v-container class="d-flex flex-column align-center" id="PageContainer">
          <Nuxt />
          <v-btn color="primary" class="my-4" @click="print()">Print</v-btn>
        </v-container>
      </client-only>
    </v-main>

    <Footer />
  </v-app>
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

<style>
#PageContainer {
  overflow: auto;
  width: 100vw;
}
#printMe {
  width: 21cm;
  height: 29.7cm;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: block;
  position: relative;
}
/* #BannerBG {
  width: 70%;
  height: 5cm;
  background: #ffffa1;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
} */
#BannerBG {
  width: 18cm;
  height: 25cm;
  border: 1px dotted black;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 1.5cm;
}
#BannerImg {
  max-height: 90px;
  padding: 0 30px;
  background-color: white;
  transform: translateX(-50%);
  position: absolute;
  top: 2cm;
  left: 50%;
}
#printMe h1 {
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  margin-top: 5.7cm;
  padding-bottom: 0.6cm;
}
#printMe h3 {
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  padding: 0.6cm 0 0.4cm 0;
}
#printMe table {
  width: 64.7619047619%;
  border-collapse: collapse;
  margin-left: 17.61904761905%;
}
#printMe table tbody tr td {
  font-size: 14px;
  padding: 6px 12px;
}
#printMe table tbody tr td:nth-child(1) {
  font-weight: 500;
  width: 4.6cm;
}
#printMe #sign {
  font-size: 12px;
  font-weight: 300;
  position: absolute;
  bottom: 2.8cm;
  right: 20%;
  padding: 10px 30px;
  border-top: 1px dotted black;
}
</style>
