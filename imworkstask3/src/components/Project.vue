<template>
    <div>
        <v-card
            elevation="6" class="ma-2"
        >
            <v-container fluid pa-0>
                <v-toolbar dense class="pa-0">
                    <v-toolbar-title>
                        <v-btn icon>
                            <v-icon color="blue" circle>mdi-file-document-outline</v-icon>
                        </v-btn>
                        Projects
                    </v-toolbar-title>
                    <v-row>
                    <v-spacer></v-spacer>
                        <v-col  class="d-flex pt-11 pl-10" cols="2">
                            <v-dialog
                                v-model="dialog"
                                width="600"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        color="success"
                                        dark
                                        v-bind="attrs"
                                        v-on="on"
                                        
                                    >
                                        Create Project
                                    </v-btn>
                                </template>
                                <v-card height="550px" max-width="600vh">
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn icon color="grey" @click="dialog = false">
                                            X
                                        </v-btn>
                                    </v-card-actions>
                                    <v-divider></v-divider>
                                    <div>
                                        <v-carousel v-model="model" :show-arrows="false">
                                            <v-carousel-item
                                                v-for="item in items"
                                                :key="item.text"
                                            >
                                                <v-sheet color="white" elevation="1" height="150%" title>
                                                    <v-card>
                                                        <v-img src="https://picsum.photos/350/165?random"
                                                           height="300"
                                                           class="grey darken-4"></v-img>
                                                     <v-spacer></v-spacer>
                                                     <v-row denseclass="fill-height" align="center"
                                                            justify="center" single-line> 
                                                        <h3 class="ma-6">{{item.text}}</h3>
                                                        <h4 class="pa-4">{{item.subtitle}}</h4>
                                                     </v-row> 
                                                     <v-row align="center"
                                                            justify="center">
                                                        <v-btn text outlined color="grey">Back</v-btn>
                                                        <v-btn text color="blue" outlined>Next</v-btn>
                                                     </v-row>
                                                    </v-card>
                                                </v-sheet>
                                            </v-carousel-item>
                                        </v-carousel>
                                    </div>
                                </v-card>
                            </v-dialog>
                        </v-col>
                        <v-col  class="d-flex pt-10" cols="2">
                            <v-select dense label="Bulk Actions" outlined></v-select>
                        </v-col>
                        <v-col  class="d-flex pt-10" cols="2">
                            <v-text-field
                                label="Search"
                                append-icon="mdi-magnify"
                                outlined
                                dense
                            ></v-text-field>
                        </v-col>
                        <v-col  class=" d-flex pt-10" cols="2">
                            <v-select 
                            append-icon="mdi-filter-outline"
                            label="Filters" 
                            outlined
                            dense
                            ></v-select>
                        </v-col>
                        <v-col class="d-flex pt-10 mr-6" cols="1">
                            <v-btn class="ma-1" small outlined color="grey">
                                <v-icon>mdi-apps</v-icon>
                            </v-btn>
                            <v-btn class="ma-1" small outlined color="grey">
                                <v-icon>mdi-tune-vertical</v-icon>
                            </v-btn>
                        </v-col>

                    </v-row>
                </v-toolbar>

                <v-row no-gutters>
                    <v-col md="8" offset="2"><Tabs class="d-flex justify-center"/></v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <Cards />
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </div>
</template>

<script>
import Tabs from "./Tabs";
import Cards from "./Cards";
export default {
  components: {
    Tabs,
    Cards
  },
  data() {
      return {
     dialog: false,
     items: [
        {
            text:'Welcome to ImWorks',
            subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor.'
        },
        {
            text:'Manage Multiple Workspaces with Ease ',
            subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor.'
        },
        {
            text:'Easy Collaboration with Team Members',
            subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor.'
        }
     ],
     model: 0
    }
  }
};
</script>

<style>
.v-card {
  padding-bottom: 340px;
}
h3 {
    color: white;
}
h4 {
    color:white;
    font-weight:normal;
}
</style>