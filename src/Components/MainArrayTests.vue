<template lang="pug">
div.targets.main
  hr
  div.js-target
    h1 Javascript Target
    | class name and id 
    span.big 'js-target' 

  div.root
    h1 Root Target
    | class name and id
    span.big 'root'

  div.counter1
    h1 Counter Target
    | class name
    span.big 'counter1'
 
  div.counter2
    h1 Counter Target
    | class name
    span.big 'counter2'
 
  div.counter3
    h1 Counter Target
    | class name
    span.big 'counter3'
 
  div.counter4
    h1 Counter Target
    | class name
    span.big 'counter4'
  div.btnContainer
    input(type="button" value='RunMethod' @click="runMethod")
</template>


<script>
//imports
  import { arr_Obj_People } from '../PracticeFiles/Premade-Data/PracticeData.js';
  import { arr_Obj_Inventors } from '../PracticeFiles/Premade-Data/PracticeData.js';
  import { arr_LargeNumb } from '../PracticeFiles/Premade-Data/PracticeData.js';

export default {
  data() {
    return {
      weaponsBase: {
        CrovelLight: 49,
        CrovelHeavy: 86,
        CrovelAlt: 15,
        KatanaLight: 68,
        KatanaHeavy: 90,
        KatanaAlt: 68,
        BoneLight: 80,
        BoneHeavy: 165,
        BoneAlt: 175,
        PulverizerLight: 70,
        PulverizerHeavy: 145,
        PulverizerAlt: 528,
        ZweiLight: 85,
        ZweiHeavy: 195,
        ZweiAlt: 63,
        VLAD: 30,
        EvisceratorPrimary: 480,
        EvisceratorStab: 90,
        EvisceratorChain: 29
      },
      weaponsMisc: {
        PELLETS: {
          VLAD: 7
        }
      }
    };
  },

  computed: {},

  methods: {
runMethod() {
        // Start of Run Method        








        // End of Run Method
    },
},
created() {
      console.log(this.runMethod(),  "outputs Undefined if nothing was returned from runMethod() ");

    }
  }

</script>
<style lang="sass">
    </style>



