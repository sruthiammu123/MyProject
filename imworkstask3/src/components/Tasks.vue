<template>
  <div>
  <v-card elevation="4" style="overflow-y: auto;" class="ma-4" max-height="428" max-width="1035">
     <v-container>
      <v-row dense>
        <v-col sm="8" lg="8">
            <v-card-title>My Tasks</v-card-title>{{ myTasks }}
        </v-col>
        <v-col
            class="d-flex"
            cols="4"
            sm="2"
        >
            <v-select
                label="Overdue"
                 solo
            ></v-select>
        </v-col>
      </v-row>
     <v-row>
      <v-col cols="8" md="10" sm="10" xs="10" offset-md="1">
        <v-card
          elevation="4"
          :class="`pa-2 project ${project.status} mb-2 mx-2`"
          v-for="project in projects"
          :key="project.title"
        >
        <v-row class="pa-2">
          <v-col cols="8" md="8" sm="8" xs="8">
            <div>
              <strong>{{ project.title }}</strong>
              <span class="pl-2"
              ><v-chip small label :class="`${project.status} caption`">
                {{ project.status }}
              </v-chip></span>
            </div>
          </v-col>
          <v-col cols="4" md="4" sm="4" xs="4" class="d-flex justify-end">
              <span>
                {{ project.date }}
                <v-icon>mdi-dots-vertical</v-icon>
              </span>
          </v-col>
        </v-row>
        <v-row no-gutters class="hidden-md-and-down pa-2">
          <v-col>
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </div>
          </v-col>
        </v-row>
        <v-row class="pa-2">
          <v-col>
            <div>
              Project Name :
              <span class="hidden-md-and-down"
              >Mahila Kisan Sashaktikaran Pariyojana (MKSP)</span>
            </div>
          </v-col>
        </v-row>
        </v-card>
      </v-col>
     </v-row>
     </v-container>
  </v-card>
  </div>
</template>

<script>
export default {
  name: "Notifications",
  data: () => ({
    projects: [
      {
        title: "Baseline Survey",
        date: "28/03/2019",
        status: "Surveys"
      },
      {
        title: "Percentage of decrease in plantation cost",
        date: "28/03/2019",
        status: "Outcomes"
      },
      {
        title: "Percentage of increase in income from new Plantation methods",
        date: "30/03/2019",
        status: "Outcomes"
      },
      {
        title: "Improvement in the Plantation",
        date: "31/03/2019",
        status: "Outputs"
      },
      {
        title: "Increase in the overall annual income of framers",
        date: "23/03/2019",
        status: "Outputs"
      }
    ]
  })
};
</script>

<style>
#MyTasks-card {
  margin: 20px 20px 0 80px;
  height: 100vh;
}
.project.Surveys {
  border-left: 5px solid #2196f3;
}
.project.Outcomes {
  border-left: 5px solid #ff5722;
}
.project.Outputs {
  border-left: 5px solid #4caf50;
}
.v-chip.Surveys {
  color: #2196f3;
  background: lightblue;
}
.v-chip.Outcomes {
  color: #ff5722;
  background: rgb(223, 142, 67);
}
.v-chip.Outputs {
  color: #4caf50;
}
</style>