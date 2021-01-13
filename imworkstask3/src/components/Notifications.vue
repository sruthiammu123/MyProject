<template>
  <v-card elevation="4" class="ma-8" max-height="428" max-width="600">
    <v-row>
        <v-col>
            <v-card-title>Notifications</v-card-title>
        </v-col>
        <v-col
            class="d-flex"
            cols="4"
            sm="3"
        >
            <v-select
                label="Today"
                solo
                class="pr-2"
            ></v-select>
        </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-list two-line>
      <v-list-item-group v-model="selected" multiple>
        <template v-for="(item, index) in items">
          <v-list-item :key="item.title">
            <template>
              <v-list nav dense>
                <v-btn
                  class="pa-0"
                  icon
                  small
                >
                  <v-icon left color="blue" circle>{{item.icon }}</v-icon>
                </v-btn>
              </v-list>
              <v-list-item-content>
                <v-list-item-title v-text="item.title" class="font-weight-bold" 
                ></v-list-item-title>

                <v-list-item-subtitle
                  v-text="item.subtitle"
                ></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text
                  v-text="item.action"
                ></v-list-item-action-text>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider v-if="index < items.length - 1" :key="index"></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "Notifications",
  data: () => ({
    items: [
      {
        icon: "mdi-folder-open",
        title: "Teach Each",
        subtitle: "Neha Shekar has assigned a task against this project."
      },
      {
        icon: "mdi-octagon",
        action: "8:03 PM",
        title: "Subscription",
        subtitle: "Your Subscription is about to expire in 3 days."
      },
      {
        icon: "mdi-account-tie",
        action: "8:22 AM",
        title: "IN-Southern Region",
        subtitle: "Ben John have been invited to manage to manage this woekspace."
      },
      {
        icon: "mdi-vector-polyline",
        action: "5:03 PM",
        title: "Evenet Planning Checklist",
        subtitle: "Neha Shekhar have been invited you to this initiative."
      },
      {
        icon: "mdi-folder-open",
        action: "7:38 PM",
        title: "Mission Home",
        subtitle: "Ben John has assigned a task against this project."
      }
    ]
  })
};
</script>