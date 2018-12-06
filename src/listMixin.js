export default {
  data() {
    return {
      names: ['Max', 'John', 'Ellen', 'Behnjamin'],
      searchName: ''
    }
  },
  computed: {
    filterNames() {
      return this.names.filter(name => {
        return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1;
      })
    }
  },
}