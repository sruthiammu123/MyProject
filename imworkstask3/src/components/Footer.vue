<template>
   <v-footer
       padless
       fixed
       color="white"
       style="height: 50px"
       class="hidden-md-and-down"
   >
       <v-col cols="12">
           <span class="pl-16">
               Quick Access:
               <v-icon small class="pl-6">mdi-message</v-icon>
               <span class="blue--text pl-4">Feedback</span>
               <span class="pl-4">|</span>
               <v-icon small class="pl-6">mdi-help-circle</v-icon>
               <span class="blue--text pl-4">Help Desk</span>
           </span>
       </v-col>
   </v-footer>
</template>

<script>
export default {
    name: "Footer"
};
</script>