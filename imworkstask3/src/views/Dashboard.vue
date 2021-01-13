<template>
  <div>
    <v-card fluid class="ma-8">
      <v-container fluid px-6>
        <v-row dense>
          <v-card-title class="pa-7">
            <v-icon left color="blue" circle>mdi-view-dashboard</v-icon>
            <span>Dashboard</span>
          </v-card-title>
        </v-row>
        <v-row dense>
          <v-col cols="4" v-for="Card in Cards" :key="Card.id">
            <v-card elevation="2" class="ma-8" height="150px" max-width="600">
              <v-row dense>
                <v-col cols="8">
                  <v-card-title
                    ><div>{{ Card.title1 }}</div></v-card-title
                  >
                  <v-card-title>{{ Card.value }}%</v-card-title>
                  <v-card-subtitle>{{ Card.subtitle1 }}</v-card-subtitle>
                  <v-card-subtitle>{{ Card.subtitle2 }}</v-card-subtitle>
                </v-col>
                <v-col cols="2" class="mt-16">
                  <div class="text-center">
                    <v-progress-circular
                      :rotate="270"
                      :size="130"
                      :width="12"
                      :value="Card.value"
                      :color="Card.color"
                      rounded
                    >
                      {{ Card.value }}%
                    </v-progress-circular>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
         <v-row dense>
          <v-col cols="4" class="mx-auto">
            <Notifications />
          </v-col>
          <v-col cols="8">
            <Tasks />
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="4" class="mx-auto">
            <Helpdocumentation />
          </v-col>
          <v-col cols="8">
            <Myteam />
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import Notifications from "../components/Notifications";
import Tasks from "../components/Tasks";
import Helpdocumentation from "../components/Helpdocumentation";
import Myteam from "../components/Myteam";
export default {
  name: "Dashboard",
  components: {
    Notifications,
    Tasks,
    Helpdocumentation,
    Myteam
  },
  data: () => ({
    Cards: [
      {
        id: 1,
        title1: "Completed Tasks",
        value: 70,
        subtitle1: "Tasks Completed",
        subtitle2: "The tasks completion progress is increased to 70% out of 100%",
        color: "green"

      },
      {
        id: 2,
        title1: "Active Tasks",
        value: 40,
        subtitle1: "Tasks Completed",
        color: "orange",
        subtitle2: "The active tasks progress is decreased to 40% out of 100%"
      },
      {
        id: 3,
        title1: "Assigned Tasks",
        value: 90,
        subtitle1: "Tasks Completed",
        subtitle2: "The tasks assigned progress is increased to 90% out of 100%",
        color: "blue lighten-1"
      }
    ],
    items: [
      {
        action: "15 min",
        headline: "Brunch this weekend?",
        title: "Ali Connors",
        subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`
      },
      {
        action: "2 hr",
        headline: "Summer BBQ",
        title: "me, Scrott, Jennifer",
        subtitle: `Wish I could come, but I'm out of town this weekend.`
      },
      {
        action: "6 hr",
        headline: "Oui oui",
        title: "Sandra Adams",
        subtitle: "Do you have Paris recommendations? Have you ever been?"
      },
      {
        action: "12 hr",
        headline: "Birthday gift",
        title: "Trevor Hansen",
        subtitle:"Have any ideas about what we should get Heidi for her birthday?"
      },
      {
        action: "18hr",
        headline: "Recipe to try",
        title: "Britta Holt",
        subtitle:"We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
      }
    ]
  })
};
</script>

<style>
#dashboard-card {
  margin: 0 10px 0 80px;
  height: 100vh;
  padding-bottom: 100px;
}
.v-card {
  padding-bottom: 250px;
}
</style>
