<template>
  <div class="container">
    <CodeBlock
      type="code"
      title="Promise all"
      content="
           The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises. This returned promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.
            "
      codeblock="
src/store/modules/users.js

export default {
    state: {
        people: [],
        films: [],
        planets: [],
        species: [],
        starships: [],
        vehicles: [],,
    },
    
    mutations: {
        SET_PEOPLE(state, payload) {
            state.people = payload
        },
        SET_FILMS(state, payload) {
            state.films = payload
        },
        SET_PLANETS(state, payload) {
            state.planets = payload
        },
        SET_SPECIES(state, payload) {
            state.species = payload
        },
        SET_STARSHIPS(state, payload) {
            state.starships = payload
        },
        SET_VEHICLES(state, payload) {
            state.vehicles = payload
        }
    },

    actions: {
        GET_DATA({commit},payload) {
            const people = fetch(`https://swapi.dev/api/people?search=${payload}`);
            const films = fetch(`https://swapi.dev/api/films?search=${payload}`);
            const planets = fetch(`https://swapi.dev/api/planets?search=${payload}`);
            const species = fetch(`https://swapi.dev/api/species?search=${payload}`);
            const starships = fetch(`https://swapi.dev/api/starships?search=${payload}`);
            const vehicles = fetch(`https://swapi.dev/api/vehicles?search=${payload}`);

            Promise.all([people, films, planets, species, starships, vehicles])
                .then(values => {
                    return Promise.all(values.map(res => res.json()))
            })
            .then(data => {
                    <!-- i used multiple mutations to update the data in the most simple way
                         to avoid complex data structure, it's possible to use only one commit
                         to update all the data we need but the data structure will be hard to 
                         work with and very complex.
                      -->

                    commit('SET_PEOPLE',data[0])
                    commit('SET_FILMS',data[1])
                    commit('SET_PLANETS',data[2])
                    commit('SET_SPECIES',data[3])
                    commit('SET_STARSHIPS',data[4])
                    commit('SET_VEHICLES',data[5])
            })
            .catch(error => alert(error))
    }, 
    },
    getters: {
       
    },
}     
            "
    />
  </div>
</template>

<script>
export default {
  components: {
    CodeBlock: () =>
      import(
        /* webpackChunkName: "CodeBlock" */ "../globalComponents/codeBlock/CodeBlock.vue"
      ),
  },
};
</script>

<style>
</style>