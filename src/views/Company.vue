<template>
  <div>
    <h3>Kompaniya</h3>
    <v-row justify="center">
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <v-row justify="space-between" align="center">
              <v-col cols="4">
                <v-text-field
                  v-model="newCompany.name"
                  label="Kompaniya Nomi"
                ></v-text-field>
              </v-col>
              <v-col cols="3">
                <v-select
                v-model="newCompany.type"
                  :items="['qogoz', 'metall', 'plastik', 'shisha']"
                  label="Foaliyat turi"
                ></v-select>
              </v-col>
              <v-col cols="3">
                <p class="headline">{{ newCompany.quantity }} so'm/Kg</p>
                <v-slider
                  v-model="newCompany.quantity"
                  max="10000"
                  step="200"
                  class="py-0"
                  ticks="always"
                  tick-size="5"
                  thumb-label
                  min="1000"
                >
                </v-slider>
              </v-col>
              <v-col cols="auto">
                <v-btn color="primary" @click="qoshish"
                  >Qo'shish<v-icon right>mdi-send</v-icon></v-btn
                >
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Kompaniya nomi</th>
            <th class="text-left">Yo'nalishi</th>
            <th class="text-left">Narxi</th>
            <th class="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,i) in desserts" :key="i">
            <td>{{ item.name }}</td>
            <td>{{ item.type }}</td>
            <td>
              <v-slider
                v-model="item.quantity"
                max="10000"
                step="200"
                class="py-0"
                ticks="always"
                tick-size="5"
                thumb-label
                min="1000"
              >
              </v-slider>
              <p class="headline">{{ item.quantity }} so'm/Kg</p>
            </td>
            <td>
              <v-btn small color="blue darken-2" fab
                ><v-icon>mdi-pen</v-icon></v-btn
              >
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newCompany: {
        name: '',
        type: 'paper',
        quantity: 1000
      },
      desserts: [
        {
          name: 'Yangi yul Metalurgiya OOO',
          type: 'metall',
          quantity: 2500
        },
        {
          name: 'Yangi yul Metalurgiya OOO',
          type: 'metall',
          quantity: 3900
        },
        {
          name: 'Yangi yul Metalurgiya OOO',
          type: 'metall',
          quantity: 1300
        }
      ]
    }
  },
  methods: {
    qoshish () {
      console.log(this.newCompany)
    }
  }
}
</script>

<style></style>
