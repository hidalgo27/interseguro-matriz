<template>
  <div class="pb-6">
    <div class="mx-auto container">
      <div class="text-center text-primary mt-6 omnes-semibold text-xl mb-6">ROTAR MATRIZ -90º (ANTIHORARIO)</div>
      <div class="shadow-lg w-1/2 rounded-2xl is-box m-auto p-2">
        <div class="p-4">
          <div class="w-full mx-auto p-1 pr-0 flex items-center gap-4">
            <div class="flex-1 flex inline-flex items-center gap-x-4">
              <span class="font-semibold text-gray-500">JSON Matriz Input:</span>
              <input type="text" v-model="matriz.matrix" class="is-input flex-1" />
            </div>
            <div class="w-auto">
              <button
                type="button"
                class="btn-secondary text-center"
                @click="submit()"
              >
                Rotar
              </button>
            </div>
          </div>

          <div class="grid ">
            <div class="text-center font-semibold text-gray-500">
              <div class="text-center text-primary mt-6 omnes-medium text-lg">Resultado:</div>
            </div>
            <template v-if="result.length > 0">
              <div class="border p-6 text-center">
                {{ result }}
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="text-center text-primary mt-6 omnes-semibold text-lg">HISTORIAL</div>
      <div class="shadow-lg w-1/2 rounded-2xl mb-6 is-box m-auto p-2">
        <div class="grid mt-6">
          <div class="block" v-for="matrixs in  list">
            {{ matrixs.id }} - {{ matrixs.matriz }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "home",
  data() {
    return {
      matriz : {
        matrix: null,
      },
      result: [],
      list: ""
    }
  },
  methods: {
    refre(){
      const sendList = async () => {
        try {
          const res = await axios.get('http://localhost:8080/matrix/',{headers: {
              'Content-Type': 'application/json'
            }})
          // const data = await res.data

          this.list = res.data


        } catch (error) {

          console.log(error)

        }
      }
      sendList()
    },
    submit() {
        const sendPolicy = async () => {
          try {
            var raw = JSON.stringify({"matriz": JSON.parse(this.matriz.matrix)});
            const res = await axios.post('http://localhost:8080/matrix/', raw,  {headers: {
                'Content-Type': 'application/json'
              }})
            // const data = await res.data
            this.result = res.data.resultado
          } catch (error) {
            this.result = "Matriz invalida"
          }
        }
        sendPolicy();
        this.refre();
      }
  },
  mounted() {
    const sendList = async () => {
      try {
        const res = await axios.get('http://localhost:8080/matrix/',{headers: {
            'Content-Type': 'application/json'
          }})
        // const data = await res.data

        this.list = res.data


      } catch (error) {

        console.log(error)

      }
    }
    sendList()
  }
}
</script>
