<template>
  <div>
    <h1>Course detail</h1>
    <vs-row vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="10">
        <vs-card>
          <div slot="header">
            <h3>Flutter: Membuat aplikasi Android dengan Flutter dan Firebase</h3>
          </div>
          <div>
            <span>Integrasi Flutter dengan Firebase realtime database</span>
          </div>
          <div class="tab-info">
            <vs-tabs>
              <vs-tab label="Waktu dan tanggal">
                <div class="con-tab-ejemplo">
                  <p>Mulai: 29 Oktober 2020</p>
                  <p>Sampai:30 Oktober 2020</p>
                  <p>Jam:9.00 - 16.00</p>
                </div>
              </vs-tab>
              <vs-tab label="Lokasi">
                <div class="con-tab-ejemplo">
                  <p>Rumah Coding</p>
                  <p>Jalan Kramat Batas III No 18, Beji, Depok, Jawa Barat</p>
                  <div>
                    <h3>Peta:</h3>
                    <p>Longitude: 1273812</p>
                    <p>Latitude: 73498</p>
                  </div>
                </div>
              </vs-tab>
              <vs-tab label="Pengajar">
                <div class="con-tab-ejemplo">
                  <p>Abdul Fattah Ikhsan</p>
                  <h3>Profile pengajar:</h3>
                  <p>Ahli dibidangnya  </p>
                </div>
              </vs-tab>
              <vs-tab label="Peserta">
                <div class="con-tab-ejemplo">
                  <vs-list>
                    <vs-list-item title="One text"></vs-list-item>
                    <vs-list-item title="Another text" subtitle="A little text"></vs-list-item>
                    <vs-list-item title="Some more text"></vs-list-item>
                    <vs-list-item title="Even more text" subtitle="Another little text"></vs-list-item>
                  </vs-list>
                </div>
              </vs-tab>
            </vs-tabs>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: "CourseDetail",
  // components: {},
  data() {
    return {};
  }
};
</script>

<style scoped>
h1 {
  margin-top: 12px;
  margin-bottom: 12px;
}
.tab-info {
  margin-top: 8px;
}
</style>
