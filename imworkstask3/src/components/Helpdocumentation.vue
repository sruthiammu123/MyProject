<template>
    <v-card elevation="4" class="ma-8" max-height="428" max-width="600">
        <v-row>
            <v-col>
                <v-card-title>Help Documentation</v-card-title>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-list two-line>
            <v-list-item-group>
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
        icon: "mdi-reorder-horizontal",
        title: "Getting Started",
        subtitle: "Lorem Ipsum is simply dummy text of the prining and typesetting industry."
      },
      {
        icon: "mdi-reorder-horizontal",
        title: "Getting Started",
        subtitle: "Lorem Ipsum is simply dummy text of the prining and typesetting industry."
      },
      {
        icon: "mdi-reorder-horizontal",
        title: "Getting Started",
        subtitle: "Lorem Ipsum is simply dummy text of the prining and typesetting industry."
      },
      {
        icon: "mdi-reorder-horizontal",
        title: "Getting Started",
        subtitle: "Lorem Ipsum is simply dummy text of the prining and typesetting industry."
      }
    ]
  })
};
</script>