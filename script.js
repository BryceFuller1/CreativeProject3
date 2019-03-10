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
    dwightFirst: '',
    dwightSecond: '',
    hughFirst: '',
    hughLast: '',
    chrisFirst: '',
    chrisLast: '',
    galFirst: '',
    galLast: '',
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

    dwight()
    {
      if (this.dwightFirst === 'dwight' && this.dwightLast === 'schrute')
      {
        this.supaScore();
      }
      this.dwightFirst = '';
      this.dwightLast = '';
    },

    hugh()
    {
      if (this.hughFirst === 'hugh' && this.hughLast === 'jackman')
      {
        this.supaScore();
      }
      this.hughFirst = '';
      this.hughLast = '';
    },

    chris()
    {
      if (this.chrisFirst === 'chris' && this.chrisLast === 'pratt')
      {
        this.supaScore();
      }
      this.chrisFirst = '';
      this.chrisLast = '';
    },

    gal()
    {
      if (this.galFirst === 'gal' && this.galLast === 'gladot')
      {
        this.supaScore();
      }
      this.galFirst = '';
      this.galLast = '';
    },

    supaScore ()
    {
      this.scorez = this.scorez + 1;
    }

    },

});
