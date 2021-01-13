<template>
  <v-row class="px-4">
    <v-col cols="2" md="3" v-for="detail in details" :key="detail.value">
      <v-card height="250px">
        <v-row no-gutters>
          <!-- box col -->
          <v-col cols="12">
            <v-row no-gutters>
              <!-- inner col 1 -->
              <v-col cols="7">
                <v-card-title
                  ><v-icon left medium color="blue">mdi-folder</v-icon
                  >{{ detail.name }}</v-card-title
                >
                <v-card-subtitle>{{ detail.time }}</v-card-subtitle>
              </v-col>
              <!-- <v-spacer></v-spacer> -->
              <!-- inner col 2 -->
              <v-col cols="2" class="mt-6">
                <v-icon>mdi-checkbox-blank-outline</v-icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <hr />
        <v-row>
          <v-col>
            <v-list dense disabled>
              <v-list-item-group>
                <v-list-item v-for="(item, i) in items" :key="i">
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
          <v-col>
            <v-progress-circular
              :size="100"
              :width="8"
              :value="detail.value"
              color="#20C997"
              class="mt-4"
            >
              <center class="black--text">
                {{ detail.value }}% <br />
                Progress
              </center>
            </v-progress-circular>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "cards",
  data: () => ({
    details: [
      {
        name: "Mahila Kisan",
        time: "Span:10-08-20 to 20-08-21",
        budget: "40,000",
        value: 70
      },
      {
        name: "Teach Each",
        time: "Span:11-08-20 to 21-08-21",
        budget: "20,000",
        value: 40
      },
      {
        name: "Mission Home",
        time: "Span:12-08-20 to 22-08-21",
        budget: "30,000",
        value: 90
      },
      {
        name: "Fund Raiser Events",
        time: "Span:13-08-20 to 23-08-21",
        budget: "60,000",
        value: 50
      }
    ],
    items: [
      { text: "Tags", icon: "mdi-tag" },
      { text: "Team", icon: "mdi-account" },
      { text: "Budget", icon: "mdi-wallet" }
    ]
  })
};
</script>