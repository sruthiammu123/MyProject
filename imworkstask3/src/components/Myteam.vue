<template>
   <div>
        <v-card elevation="4" class="ma-4" max-height="428">
            <v-row dense>
                <v-col>
                    <v-card-title>My Team</v-card-title>
                </v-col>
                <v-col
                    class="d-flex"
                    cols="4"
                    sm="2"
                >
                    <v-select
                      :items="items"
                      label="Sort Status"
                      solo
                      class="pr-2"
                    ></v-select>
                </v-col>
            </v-row>
            
            <v-data-table
              :headers="headers"
              :items="myteam"
              :items-per-page="5"
              :single-expand="singleExpand"
              :expanded.sync="expanded"
              item-key="name"
              show-expand
              class="font-weight-bold"
            >
              <template v-slot:[`item.progress`]="{ item }">
                <v-row  v-if= " item.progress === 100 ">
                  <v-progress-linear
                    color="red darken-2"
                    rounded
                    :value="item.progress"
                    size=""
                  ></v-progress-linear>{{item.progress}}%
                </v-row>
                <v-row  v-else>
                  <v-progress-linear
                      color="purple lighten-2"
                      rounded
                      :value="item.progress"
                      size=""
                  ></v-progress-linear>{{item.progress}}%
                </v-row>
              </template> 
              <template v-slot:expanded-item="{ headers, item }">
                <td :colspan="headers.length">
                  More info about {{ item.name }}
                </td>
              </template>
            </v-data-table>
            <v-divider></v-divider>
        </v-card>
    </div>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'User Role', value: 'userrole' },
        { text: 'Task Counts', value: 'taskcounts' },
        { text: 'Progress', value: 'progress' },
        { text: 'Actions', value: 'data-table-expand' }
      ],
      myteam: [
        {
          name: 'Varun Mital',
          userrole: 'Admin',
          taskcounts: 1,
          progress: '92',
          // actions: 'mdi-menu-down'
        },
        {
          name: 'Ben John',
          userrole: 'Volunteer',
         taskcounts: 4,
          progress: '50',
          //actions: 4.
        },
        {
          name: 'Neha Shekhar',
          userrole: 'Finance Manager',
          taskcounts: 6,
          progress: '100',
          //actions: 4.
        },
        {
          name: 'Nadeem V.',
          userrole: 'Donor',
          taskcounts: 1,
          progress: '92',
          //actions: 4.
        },
        {
          name: 'Shivani Kumar',
          userrole: 'Volunteer',
          taskcounts: 4,
          progress: '50',
          //actions: 4.
        },
        {
          name: 'Sneha Bansal',
          userrole: 'Regional Manager',
          taskcounts: 6,
          progress: '100',
          //actions: "mdi-menu-down"
        }
      ],
      expanded: [],
      singleExpand: false,
    }
  },
}
</script>