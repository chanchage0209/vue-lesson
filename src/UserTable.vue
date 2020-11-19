<template>
  <v-container>
    <v-simple-table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.email }}</td>
          <td>
            <v-btn x-small color="secondary" @click="editUser(user)">
              edit
            </v-btn>
            <v-btn x-small color="error" @click="deleteUser(user.id)">
              del
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-simple-table>

    <v-btn color="primary" @click="create"> Create </v-btn>

    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title v-if="user.id"> Edit user </v-card-title>
        <v-card-title v-else> New user </v-card-title>

        <v-card-text>
          <v-text-field v-model="user.name" placeholder="Name" />

          <v-radio-group v-model="user.gender" label="Gender">
            <v-radio value="male" label="Male" />
            <v-radio value="female" label="Female" />
          </v-radio-group>

          <v-text-field v-model.number="user.age" placeholder="Age" />
          <v-text-field v-model="user.email" placeholder="Email" />
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn text color="error" @click="dialog = false">Cancel</v-btn>

          <v-btn text color="primary" @click="submit">
            {{ user.id ? "Edit" : "Create" }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>


<script>
import api from "./api";

export default {
  data: () => ({
    users: [],
    dialog: false,
    user: {
      name: "",
      gender: "male",
      age: 18,
      email: "",
    },
  }),
  mounted() {
    this.list();
  },
  methods: {
    create() {
      this.user = {
        name: "",
        gender: "male",
        age: 18,
        email: "",
      };
      this.dialog = true;
    },
    list() {
      api.list().then((response) => {
        this.users = response.data.data;
      });
    },
    submit() {
      if(this.user.id){
        api.update(this.user.id, this.user).then(() => {
          this.list();
          this.dialog = false;
        });
      }else{
        api.create(this.user).then(() => {
          this.list();
          this.dialog = false;
        });
      }
    },
    deleteUser(id) {
      api.delete(id).then(() => {
        this.list();
      });
    },
    editUser(user) {
      this.user = { ...user };
      this.dialog = true;
    },
  },
};
</script>