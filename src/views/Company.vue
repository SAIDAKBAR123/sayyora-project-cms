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
                  return-object
                v-model="newCompany.type"
                  :items="service"
                  item-text="name"
                  label="Foaliyat turi"
                ></v-select>
              </v-col>
              <v-col cols="2">
                <v-select
                  return-object
                  v-model="newCompany.region"
                  :items="viloyat"
                  item-text="name"
                  label="Viloyat"
                ></v-select>
              </v-col>
              <v-col  cols="2">
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
                <p class="headline pb-0">{{ item.price }} so'm / Kg</p>
              <v-slider
                v-model="item.price"
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
              <v-btn text color="primary">E'lon qilish</v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import Post from '../services/Post'
import Get from '../services/Get'

export default {
  data () {
    return {
      newCompany: {
        name: '',
        type: null,
        quantity: 1000,
        region: null
      },
      service: [],
      viloyat: [],
      desserts: [
        {
          name: 'Yangi yul Metalurgiya OOO',
          type: 'metall',
          region: 'Yangi Yul',
          quantity: 2500
        }
      ]
    }
  },
  methods: {
    companyList () {
      Get.getAllCompanyList().then(res => {
        console.log(res)
        this.desserts = res
      }).catch(err => console.log(err))
    },

    qoshish () {
      if (this.newCompany.name && this.newCompany.type && this.newCompany.quantity) {
        Post.createCompany({
          name: this.newCompany.name,
          regionId: this.newCompany.region.id
        }).then((res) => {
          Post.createCompany2(this.newCompany.type.id, { companyId: res[0].insertId, price: this.newCompany.quantity }).then(res => {
            console.log(res)
            this.companyList()
          })
        }).catch(err => { console.log(err) })
      }
    },
    viloyatlar () {
      Get.getAllRegions().then(res => {
        this.viloyat = res
      }).catch(err => console.log(err))
      Get.getAllServices().then(res => {
        this.service = res
      })
    }
  },
  created () {
    this.viloyatlar()
    this.companyList()
  }
}
</script>

<style></style>
