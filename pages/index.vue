<template>
  <v-stepper v-model="TabNo" vertical>
    <!-- ##### Step 1 ##### -->

    <v-stepper-step :complete="TabNo > 1" step="1">
      <h6 class="text-h6">Content Type</h6>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-form v-model="ContentValid" class="my-2">
        <v-radio-group
          class="mt-0"
          v-model="Content"
          row
          :rules="[(v) => v != null]"
        >
          <v-radio label="Assignment" value="assignment"></v-radio>
          <v-radio label="Lab Report" value="labreport"></v-radio>
        </v-radio-group>
      </v-form>
      <v-btn color="success" @click="TabNo = 2" :disabled="!ContentValid">
        Continue
      </v-btn>
    </v-stepper-content>

    <!-- ##### Step 2 ##### -->

    <v-stepper-step :complete="TabNo > 2" step="2">
      <h6 class="text-h6">Submission Info</h6>
    </v-stepper-step>

    <v-stepper-content step="2">
      <v-form class="mt-2 mb-6">
        <v-row>
          <!-- ##### Submitted To ##### -->
          <v-col
            cols="12"
            :lg="Content == 'assignment' ? '8' : '12'"
            sm="Content=='assignment'?'6':'12'"
            xs="12"
            ><v-text-field
              v-model="SubTo"
              dense
              label="Submitted To"
              outlined
              hide-details="auto"
              clearable
            ></v-text-field
          ></v-col>
          <!-- ##### Level and Term ##### -->
          <v-col cols="12" lg="4" sm="6" xs="12" v-if="Content == 'assignment'">
            <v-select
              v-model="LevelTerm"
              :items="LevelTermList"
              item-text="name"
              item-value="value"
              label="Level and Term"
              hide-details="auto"
              dense
              outlined
            ></v-select>
          </v-col>
          <!-- ##### Assignment Course Title ##### -->
          <v-col cols="12" lg="8" sm="6" xs="12" v-if="Content == 'assignment'">
            <v-select
              :disabled="LevelTerm == null ? true : false"
              v-model="Course"
              :items="CourseList"
              item-text="name"
              item-value="value"
              label="Course Title"
              hide-details="auto"
              return-object
              dense
              outlined
            ></v-select>
          </v-col>
          <!-- ##### Lab Course Title ##### -->
          <v-col cols="12" lg="8" sm="6" xs="12" v-else>
            <v-select
              v-model="Course"
              :items="CourseList"
              label="Course Title"
              item-text="name"
              item-value="value"
              hide-details="auto"
              return-object
              dense
              outlined
            >
            </v-select>
          </v-col>
          <!-- ##### Course Code ##### -->
          <v-col cols="12" lg="4" sm="6" xs="12">
            <v-text-field
              label="Course Code"
              hide-details="auto"
              dense
              outlined
              :value="CourseCode"
              disabled
            ></v-text-field>
          </v-col>
          <!-- ##### Experiment No ##### -->
          <v-col cols="12" lg="4" sm="5" xs="12" v-if="Content == 'labreport'">
            <v-text-field
              v-model="ExpNo"
              label="Experiment No."
              hide-details="auto"
              dense
              outlined
            ></v-text-field>
          </v-col>
          <!-- ##### Experiment Name ##### -->
          <v-col cols="12" lg="8" sm="7" xs="12" v-if="Content == 'labreport'">
            <v-text-field
              v-model="ExpName"
              label="Experiment Name"
              hide-details="auto"
              dense
              outlined
            ></v-text-field>
          </v-col>
          <!-- ##### Date of Performence ##### -->
          <v-col cols="12" sm="6" xs="12" v-if="Content == 'labreport'">
            <v-dialog
              ref="PerD"
              v-model="PerModal"
              :return-value.sync="PerformenceDate"
              width="290px"
              persistent
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="PerformenceDate"
                  label="Date of Performence"
                  hide-details="auto"
                  dense
                  outlined
                  readonly
                  clearable
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="PerformenceDate"
                first-day-of-week="6"
                show-current
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="PerModal = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.PerD.save(PerformenceDate)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
          <!-- ##### Date of Submission ##### -->
          <v-col cols="12" sm="6" xs="12" v-if="Content == 'labreport'">
            <v-dialog
              ref="SubD"
              v-model="SubModal"
              :return-value.sync="SubmissionDate"
              width="290px"
              persistent
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="SubmissionDate"
                  label="Date of Submission"
                  hide-details="auto"
                  dense
                  outlined
                  readonly
                  clearable
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="SubmissionDate"
                first-day-of-week="6"
                show-current
                scrollable
                :min="PerformenceDate"
              >
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="SubModal = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.SubD.save(SubmissionDate)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
        </v-row>
      </v-form>
      <v-btn
        :disabled="Course == null || Course.name == null"
        color="success"
        @click="TabNo = 3"
      >
        Continue
      </v-btn>
      <v-btn
        color="error"
        text
        :disabled="Course == null || Course.name == null"
        @click="ClearSubTo()"
      >
        Clear
      </v-btn>
      <v-btn plain @click="TabNo = 1"> Back </v-btn>
    </v-stepper-content>

    <!-- ##### Step 3 ##### -->

    <v-stepper-step :complete="TabNo > 3" step="3">
      <h6 class="text-h6">Submitted By</h6>
    </v-stepper-step>

    <v-stepper-content step="3">
      <v-form class="mt-2 mb-6">
        <v-row>
          <!-- ##### Name ##### -->
          <v-col cols="12" lg="8" sm="6" xs="12">
            <v-text-field
              v-model="SubBy"
              label="Name"
              hide-details="auto"
              dense
              outlined
              clearable
            ></v-text-field>
          </v-col>
          <!-- ##### ID No ##### -->
          <v-col cols="12" lg="4" sm="6" xs="12">
            <v-text-field
              v-model="IdNo"
              label="ID No."
              hide-details="auto"
              dense
              outlined
              clearable
            ></v-text-field>
          </v-col>
          <!-- ##### Department ##### -->
          <v-col cols="12" sm="4" xs="12">
            <v-text-field
              label="Department"
              hide-details="auto"
              dense
              outlined
              disabled
              value="CSE"
            ></v-text-field>
          </v-col>
          <!-- ##### Section ##### -->
          <v-col cols="12" sm="4" xs="12">
            <v-text-field
              label="Section"
              hide-details="auto"
              dense
              outlined
              disabled
              value="B"
            ></v-text-field>
          </v-col>
          <!-- ##### Shift ##### -->
          <v-col cols="12" sm="4" xs="12">
            <v-text-field
              label="Shift"
              hide-details="auto"
              dense
              outlined
              disabled
              value="Evening"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
      <!-- nuxt
        :to="Content == 'assignment' ? '/assignment' : '/lab-report'" -->
      <v-btn color="primary" :disabled="Submit" @click="AddInfos()">
        Submit
      </v-btn>
      <v-btn
        color="success"
        :disabled="Continue"
        nuxt
        :to="Content == 'assignment' ? '/assignment' : '/lab-report'"
      >
        Continue
      </v-btn>
      <v-btn plain @click="TabNo = 2"> Back </v-btn>
    </v-stepper-content>
    <!-- {{ SubTo }} <br />
    {{ Course }}<br />
    {{ ExpNo }}<br />
    {{ ExpName }}<br />
    {{ PerformenceDate }}<br />
    {{ SubmissionDate }}<br />
    {{ SubBy }}<br />
    {{ IdNo }}<br /> -->
  </v-stepper>
</template>

<script>
export default {
  data() {
    return {
      TabNo: 1,
      ContentValid: true,
      Content: null,
      SubTo: null,
      LevelTerm: null,
      LevelTermList: null,
      Course: null,
      CourseList: null,
      CourseCode: null,
      ExpNo: null,
      ExpName: null,
      PerModal: false,
      PerformenceDate: null,
      SubModal: false,
      SubmissionDate: null,
      SubBy: null,
      IdNo: null,
      Submit: false,
      Continue: true,
    };
  },
  watch: {
    Content: function () {
      if (this.Content == "assignment") {
        this.LevelTermList = [
          { name: "Level-1 Term-1", value: "l1t1" },
          { name: "Level-1 Term-2", value: "l1t2" },
          { name: "Level-1 Term-3", value: "l1t3" },
          { name: "Level-2 Term-1", value: "l2t1" },
          { name: "Level-2 Term-2", value: "l2t2" },
          { name: "Level-2 Term-3", value: "l2t3" },
          { name: "Level-3 Term-1", value: "l3t1" },
          { name: "Level-3 Term-2", value: "l3t2" },
          { name: "Level-3 Term-3", value: "l3t3" },
        ];
        this.CourseList = null;
      } else {
        this.CourseList = [
          { header: "Level-1 Term-1" },
          { name: "Physics-II Lab", value: "PHY 123L" },
          { divider: true },

          { header: "Level-1 Term-2" },
          { name: "Algorithm Lab", value: "CSE 213L" },
          { divider: true },

          { header: "Level-1 Term-3" },
          { name: "Object Oriented Programming Lab", value: "CSE 231L" },
          { divider: true },

          { header: "Level-2 Term-1" },
          {
            name: "Microprocessor and assembly Language Lab",
            value: "CSE 231L",
          },
          { name: "Electronic Devices and Circuits Lab", value: "CSE 224L" },
          { divider: true },

          { header: "Level-2 Term-2" },
          { name: "Computer Networks Lab", value: "CSE 313L" },
          { name: "Database Management System Lab", value: "CSE 311L" },
          { divider: true },

          { header: "Level-2 Term-3" },
          { name: "Compiler Design Lab", value: "CSE 331L" },
          { name: "Simulation and Modeling Lab", value: "CSE 413L" },
          { name: "Operating System Lab", value: "CSE 323L" },
          { divider: true },

          { header: "Level-3 Term-1" },
          { name: "System Analysis and Design Lab", value: "CSE 321L" },
          { name: "Computer Graphics Lab", value: "CSE 421L" },
          { divider: true },

          { header: "Level-3 Term-2" },
          { name: "Artificial Intelligence Lab", value: "CSE 412L" },
        ];
        this.LevelTermList = null;
      }
    },
    LevelTerm: function () {
      this.CourseList = null;
      if (this.LevelTerm == "l1t1") {
        this.CourseList = [
          {
            name: "Mathematics II: Linear Algebraand Coordinate Geometry",
            value: "MAT 121",
          },
          { name: "Discrete Mathematics", value: "CSE 131" },
          { name: "English Language-I", value: "ENG 113" },
          {
            name: "Physics- II: Electricity, Magnetism and Modern Physics",
            value: "PHY 123",
          },
        ];
      } else if (this.LevelTerm == "l1t2") {
        this.CourseList = [
          { name: "Algorithms", value: "CSE 213" },
          { name: "Accounting", value: "ACC 214" },
          { name: "Economics", value: "ECO 314" },
          {
            name: "Mathematics III : Ordinary and Partial Differential Equations",
            value: "MAT 134",
          },
        ];
      } else if (this.LevelTerm == "l1t3") {
        this.CourseList = [
          { name: "Theory of Computing", value: "CSE 221" },
          { name: "Object Oriented Programming", value: "CSE 222" },
          {
            name: "Mathematics-IV : Engineering Mathematics",
            value: "MAT 211",
          },
          { name: "Statistics", value: "STA 223" },
        ];
      } else if (this.LevelTerm == "l2t1") {
        this.CourseList = [
          { name: "Microprocessor and Assembly Language", value: "CSE 231" },
          { name: "Electronic Devices and Circuits", value: "CSE 224" },
          { name: "Instrumentation and Control", value: "CSE 232" },
          { name: "Data Communication", value: "CSE 233" },
        ];
      } else if (this.LevelTerm == "l2t2") {
        this.CourseList = [
          { name: "Computer Architecture and Organization", value: "CSE 322" },
          { name: "Computer Networks", value: "CSE 313" },
          { name: "Database Management System", value: "CSE 311" },
          { name: "Numerical Methods", value: "CSE 312" },
        ];
      } else if (this.LevelTerm == "l2t3") {
        this.CourseList = [
          { name: "Compiler Design", value: "CSE 331" },
          { name: "Simulation and Modeling", value: "CSE 413" },
          { name: "Operating System", value: "CSE 323" },
        ];
      } else if (this.LevelTerm == "l3t1") {
        this.CourseList = [
          { name: "System Analysis and Design", value: "CSE 321" },
          { name: "Computer Graphics", value: "CSE 421" },
          { name: "E-Commerce & Web Application", value: "CSE 431" },
          { name: "Industrial Management", value: "MGT 414" },
        ];
      } else if (this.LevelTerm == "l3t2") {
        this.CourseList = [
          { name: "Artificial Intelligence", value: "CSE 412" },
          { name: "Communication Engineering", value: "CSE 411" },
          { name: "Software Engineering", value: "CSE 332" },
          { name: "Project Phase I", value: "CSE 499" },
        ];
      } else if (this.LevelTerm == "l3t3") {
        this.CourseList = [
          { name: "Peripherals & Interfacing", value: "CSE 333" },
          { name: "Computer and Network Security", value: "CSE 432" },
        ];
      }
    },
    Course: function () {
      this.CourseCode = this.Course.value;
    },
  },
  methods: {
    ClearSubTo() {
      this.SubTo = null;
      this.LevelTerm = null;
      this.Course.name = null;
      this.Course.value = null;
      this.CourseCode = null;
      this.ExpNo = null;
      this.ExpName = null;
      this.PerformenceDate = null;
      this.SubmissionDate = null;
    },
    AddInfos() {
      this.$store.dispatch("NewInfos", {
        SubTo: this.SubTo,
        Course: this.Course,
        ExpNo: this.ExpNo,
        ExpName: this.ExpName,
        PerformenceDate: this.PerformenceDate,
        SubmissionDate: this.SubmissionDate,
        SubBy: this.SubBy,
        IdNo: this.IdNo,
      });
      this.Submit = !this.Submit;
      this.Continue = !this.Continue;
    },
  },
};
</script>
