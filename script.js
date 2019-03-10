// create a Vue instance
let app = new Vue({
  // bind it to the #root div in the DOM
  el: "#root",
  // provide data for bindings
  data: {
    datName: 'rich bobby q',
    bradleyFirst: '',
    bradleyLast: '',
    taylorFirt: '',
    taylorSecond: '',
    morganFirst: '',
    morganLast: '',
    mittLast: '',
    mittFirst: '',
   scorez: 0,
  },


  methods: {

    bradley()
    {
      if (this.bradleyFirst === 'bradley' && this.bradleyLast === 'cooper')
      {
        this.supaScore();
      }
      this.bradleyFirst = '';
      this.bradleyLast = '';
    },

    taylor()
    {
      if (this.taylorFirst === 'taylor' && this.taylorLast === 'swift')
      {
        this.supaScore();
      }
      this.taylorFirst = '';
      this.taylorLast = '';
    },

    morgan()
    {
      if (this.morganFirst === 'morgan' && this.morganLast === 'freeman')
      {
        this.supaScore();
      }
      this.morganFirst = '';
      this.morganLast = '';
    },

    mitt()
    {
      if (this.mittFirst === 'mitt' && this.mittLast === 'romney')
      {
        this.supaScore();
      }
      this.mittFirst = '';
      this.mittLast = '';
    },


    supaScore ()
    {
      this.scorez = this.scorez + 1;
    }

    },

});
