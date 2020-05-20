<template>
  <div>
    <v-row>
      <v-col>
        <h3>Kelib tushgan murojaatlar</h3>
      </v-col>
    </v-row>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Tartib raqam</th>
            <th class="text-left">Abonent ismi</th>
            <th class="text-left">Telefon raqami</th>
             <th class="text-left">Address</th>
            <th class="text-left">mail</th>
            <th class="text-left">Xabar</th>
            <th class="text-left">Ko'rib chiqish</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,i) in desserts" :key="item.name">
            <td>{{ i+1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.phoneNumber }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.mail }}</td>
            <td>{{ item.content }}</td>
            <td><v-btn class=" text-capitalize" outlined color="success" text>Qabul qilish</v-btn>
            <v-btn class=" text-capitalize ml-2" outlined color="primary" text fab small><v-icon>mdi-eye</v-icon></v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
     <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{  }">
        <!-- <v-btn color="primary" dark v-on="on">Open Dialog</v-btn> -->
      </template>
      <v-card>
        <v-card-title class="headline">Use Google's location service?</v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      desserts: [
        {
          name: 'Saidakbar Makhmudkhujaev',
          phoneNumber: '998333243',
          address: 'Yunusobod, Tashkent City',
          mail: 'saidakbar223@gas.com',
          content: 'hello world'
        },
        {
          name: 'Saidakbar Makhmudkhujaev',
          phoneNumber: '998333243',
          address: 'Yunusobod, Tashkent City',
          mail: 'saidakbar223@gas.com',
          content: 'hello world'
        },
        {
          name: 'Saidakbar Makhmudkhujaev',
          phoneNumber: '998333243',
          address: 'Yunusobod, Tashkent City',
          mail: 'saidakbar223@gas.com',
          content: 'hello world'
        },
        {
          name: 'Saidakbar Makhmudkhujaev',
          phoneNumber: '998333243',
          address: 'Yunusobod, Tashkent City',
          mail: 'saidakbar223@gas.com',
          content: 'hello world'
        },
        {
          name: 'Saidakbar Makhmudkhujaev',
          phoneNumber: '998333243',
          address: 'Yunusobod, Tashkent City',
          mail: 'saidakbar223@gas.com',
          content: 'hello world'
        },
        {
          name: 'Saidakbar Makhmudkhujaev',
          phoneNumber: '998333243',
          address: 'Yunusobod, Tashkent City',
          mail: 'saidakbar223@gas.com',
          content: 'hello world'
        }
      ]
    }
  }
}
</script>

<style></style>
