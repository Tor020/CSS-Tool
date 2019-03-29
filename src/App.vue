<template lang='pug'>
div
  section#top-nav
    div#toggle-nav(@click='togglenav();')
      svg(viewbox='0 0 200 200' version='1.1')
        line(x1='20' y1='20' x2='80' y2='20' stroke='black' stroke-width='3')
        line(x1='20' y1='40' x2='80' y2='40' stroke='black' stroke-width='3')
        line(x1='20' y1='60' x2='80' y2='60' stroke='black' stroke-width='3')
    .side-nav(v-bind:class='{showNav: hideNav}')
      router-link(tag='li' class='sidenav' active-class='active' to='/Home')
        a Home   
      router-link(tag='li' class='sidenav' active-class='active' to='/MainArrayTests')
        a Main Array Tests
      hr
      router-link(tag='li' class='sidenav' active-class='active' to='/Debug')
        a Debug
  router-view
    




</template>
<script>



export default {

  data() {
    return {
      fak:'1',
      hideNav:false,
    };
  },
  methods: {
  togglenav() {
    console.log('ffffffff')
      this.hideNav = !this.hideNav
    },
  }
};
</script>
<style lang="scss" scoped>
.navColumn {
  margin-top: 1.5rem;
}

li {
  a {
    text-align: center;
  }
}
#top-nav{
  background-color:rgba(0,0,0,0.3);

  top:0;
  left:0;
  height:5vh;
}
#toggle-nav{
  width:1.5rem;
  height: 5vh;
}
.side-nav {
  display:flex;
  position:fixed;
  height:100vh;
  transform:translateX(-111%);
  flex-flow:column;
  transition:all 0.7s;
  background-color:rgba(0,0,0,0.3);
  padding:0;
  width:15vw;
  min-width:15rem;
  max-width:16rem;
}

.showNav{
  transform:translateX(0%);

}
.sidenav {
  text-decoration: none;
  list-style: none;
  a {
    // color:
  }
}

h3,
li {
  margin-left: 1rem;
  // text-align:center;
}
</style>
