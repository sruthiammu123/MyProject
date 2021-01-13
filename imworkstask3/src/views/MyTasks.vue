<template>
  <div class="ma-2">
    <v-card elevation="6">
      <v-container>
        <v-row>
          <v-col md="12" sm="12" xs="12">
            <v-toolbar elevation="0">
              <v-col md="8" sm="6" xs="6">
                <v-toolbar-title
                  ><v-btn icon elevation="6"
                    ><v-icon color="blue" 
                      >mdi-format-list-bulleted</v-icon
                    ></v-btn
                  ><span class="ml-2">My Tasks</span></v-toolbar-title
                >
              </v-col>
              <v-col cols="2" md="2" sm="2" xs="2" class="d-flex justify-end">
                <div>
                  <v-text-field
                    label="Search"
                    outlined
                    dense
                    append-icon="mdi-magnify"
                    class="mt-7 pa-0 hidden-sm-and-down"
                  ></v-text-field>
                </div>
                <v-btn icon class="hidden-md-and-up"
                  ><v-icon>mdi-magnify</v-icon></v-btn
                >
              </v-col>
              <v-col cols="2" md="2" sm="2" xs="2" class="d-flex justify-end">
                <div>
                  <v-text-field
                    label="Filters"
                    outlined
                    dense
                    append-icon="mdi-filter-outline"
                    class="mt-7 pa-0 hidden-sm-and-down"
                  ></v-text-field>
                </div>
                <v-btn icon outlined class="hidden-md-and-up"
                  ><v-icon>mdi-filter-outline</v-icon></v-btn
                >
              </v-col>
              <v-btn class="ma-1" outlined color="grey" max-width="300px"><v-icon>mdi-apps</v-icon></v-btn>
            </v-toolbar>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col md="6" sm="6" xs="4" offset-md="3" offset-sm="3" offset-xs="4">
            <v-tabs class="d-flex align-center justify-center">
              <v-tab>Overdue</v-tab>
              <v-tab>Current</v-tab>
              <v-tab>Completed</v-tab>
            </v-tabs>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="8" sm="12" xs="12" offset-md="2">
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
                      </v-chip></span
                    >
                  </div>
                </v-col>
                <v-col cols="4" md="4" sm="4" xs="4" class="d-flex justify-end">
                  <span>
                    {{ project.date }}
                    <v-icon>mdi-dots-vertical</v-icon>
                  </span>
                </v-col>
              </v-row>
              <v-row class="pa-2">
                <v-col>
                  <div>
                    Project Name :
                    <span class="hidden-md-and-down"
                      >Mahila Kisan Sashaktikaran Pariyojana (MKSP)</span
                    >
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
  margin: 10px 20px 0 70px;
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