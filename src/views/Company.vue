<template>
  <div>
    <h3>Kompaniya</h3>
    <v-row justify="center">
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <v-row justify="space-between" align="center">
              <v-col cols="3">
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
              <v-col cols="2">
                     <v-select
                v-model="newCompany.region"
                  :items="['Toshkent', 'Andijon', 'Buxoro', 'Samarqand','Sirdaryo']"
                  label="Foaliyat turi"
                ></v-select>
              </v-col>
              <v-col cols="2">
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
             <th class="text-left">Viloyat yoki Shahar</th>
            <th class="text-left">Narxi</th>
            <th class="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,i) in desserts" :key="i">
            <td>{{ item.name }}</td>
            <td>{{ item.type }}</td>
             <td>{{ item.region }}</td>
            <td>
                <p class="headline pb-0">{{ item.quantity }} so'm/Kg</p>
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
        quantity: 1000,
        region: null
      },
      desserts: [
        {
          name: 'Yangi yul Metalurgiya OOO',
          type: 'metall',
          region: 'Yangi Yul',
          quantity: 2500
        },
        {
          name: 'Yangi yul Metalurgiya OOO',
          type: 'metall',
          region: 'Samarkand',
          quantity: 3900
        },
        {
          name: 'Tashkent Metalurgiya OOO',
          type: 'metall',
          region: 'Tashkent',
          quantity: 1300
        }
      ]
    }
  },
  methods: {
    qoshish () {
      if (this.newCompany.name && this.newCompany.type && this.newCompany.quantity) {
        this.desserts.push(this.newCompany)
        this.newCompany = {
          name: '',
          type: 'paper',
          quantity: 1000,
          region: null
        }
      }
    }
  }
}
</script>

<style></style>
